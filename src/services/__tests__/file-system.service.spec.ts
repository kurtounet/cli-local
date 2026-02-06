import fs from "fs-extra";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { FileSystemService } from "../file-system.service.js";

// Mock de fs-extra
vi.mock("fs-extra");

describe("FileSystemService", () => {
  let fileSystem: FileSystemService;

  // Mock de l'objet global CLI
  const mockCli = {
    path: {
      join: vi.fn((...args) => args.join("/")),
      normalize: vi.fn((p) => p),
      validatePath: vi.fn(),
      getDirectory: vi.fn(() => "/mock/dir"),
      getFileName: vi.fn((p) => "file.ts"),
      getExtension: vi.fn(() => ".ts"),
      resolve: vi.fn((...args) => args.join("/")),
    },
    logger: {
      debug: vi.fn(),
      info: vi.fn(),
      success: vi.fn(),
      error: vi.fn(),
    },
    errorHandler: {
      handle: vi.fn(),
    },
    template: {
      compile: vi.fn(() => "compiled content"),
    },
    ast: {
      analyzeFileMetadata: vi.fn(() => []),
    },
  };

  beforeEach(() => {
    vi.clearAllMocks();
    fileSystem = new FileSystemService();
    (fileSystem as any).cli = mockCli; // Injection manuelle pour le test
  });

  it("should call path.validatePath when checking if file exists", () => {
    vi.mocked(fs.existsSync).mockReturnValue(true);

    const exists = fileSystem.exists("/test/path");

    expect(mockCli.path.validatePath).toHaveBeenCalledWith("/test/path", "targetPath");
    expect(fs.existsSync).toHaveBeenCalledWith("/test/path");
    expect(exists).toBe(true);
  });

  it("should use this.cli.path.join when writing to output", async () => {
    await fileSystem.writeToOutput("/base", "sub", "test.txt", "hello");

    // Vérifie que this.cli.path.join a été utilisé pour concaténer les dossiers
    expect(mockCli.this.cli.path.join).toHaveBeenCalledWith("/base", "sub");
    // Vérifie que l'écriture finale a été faite
    expect(fs.outputFile).toHaveBeenCalled();
  });

  it("should handle errors via cli.errorHandler", async () => {
    const error = new Error("Disk full");
    vi.mocked(fs.readFile).mockRejectedValue(error);

    await expect(fileSystem.readFile("/bad/path")).rejects.toThrow();
    expect(mockCli.errorHandler.handle).toHaveBeenCalledWith(error, expect.any(String));
  });

  it("should build a physical tree recursively", async () => {
    const mockTree: any = {
      name: "root",
      type: "directory",
      children: [{ name: "file1.txt", type: "file", content: "hello" }],
    };

    await fileSystem.buildPhysicalTree(mockTree, "/start");

    expect(mockCli.this.cli.path.join).toHaveBeenCalledWith("/start", "root");
    expect(fs.ensureDir).toHaveBeenCalled();
    expect(fs.outputFile).toHaveBeenCalled();
  });

  it("should normalize paths before writing files", async () => {
    await fileSystem.writeFile("path//with//slashes", "content");

    expect(mockCli.path.normalize).toHaveBeenCalledWith("path//with//slashes");
    expect(fs.outputFile).toHaveBeenCalled();
  });
});
