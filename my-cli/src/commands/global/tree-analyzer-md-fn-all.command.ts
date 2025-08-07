import * as fs from "fs-extra";
import * as path from "path";
import { Command } from "commander";

const DEFAULT_IGNORED_FOLDERS = [
  "node_modules",
  ".git",
  "dist",
  "build",
  "vendor",
  ".vscode",
  ".idea",
  "venv",
  "env",
  "__pycache__",
  "coverage",
  ".nyc_output",
  "tmp",
  "temp",
];

// Enhanced icons for file extensions and directories
const ICONS: { [key: string]: string } = {
  // Directory icon
  directory: "📁",
  // Programming languages
  ".py": "🐍",
  ".js": "📜",
  ".ts": "📘",
  ".tsx": "⚛️",
  ".jsx": "⚛️",
  ".java": "☕",
  ".cpp": "⚙️",
  ".c": "🔧",
  ".h": "📋",
  ".hpp": "📋",
  ".php": "🐘",
  ".rb": "💎",
  ".go": "🐹",
  ".rs": "🦀",
  ".swift": "🍎",
  ".kt": "🎯",
  ".scala": "🎭",
  ".cs": "🔷",
  ".vb": "🔷",
  ".r": "📊",
  ".m": "🍎",
  ".pl": "🐪",
  ".sh": "🐚",
  ".bash": "🐚",
  ".zsh": "🐚",
  ".fish": "🐠",
  ".ps1": "💻",
  ".lua": "🌙",
  ".dart": "🎯",
  ".elm": "🌳",
  ".clj": "🔄",
  ".ex": "💜",
  ".exs": "💜",
  ".erl": "📡",
  ".hrl": "📡",
  ".f90": "🧮",
  ".f95": "🧮",
  ".pas": "🎯",
  ".asm": "⚡",
  ".s": "⚡",
  // Web technologies
  ".html": "🌐",
  ".htm": "🌐",
  ".css": "🎨",
  ".scss": "🎨",
  ".sass": "🎨",
  ".less": "🎨",
  ".vue": "💚",
  ".svelte": "🧡",
  ".angular": "🔴",
  // Data and config files
  ".json": "📋",
  ".xml": "📋",
  ".yaml": "📋",
  ".yml": "📋",
  ".toml": "📋",
  ".ini": "⚙️",
  ".cfg": "⚙️",
  ".conf": "⚙️",
  ".env": "🔐",
  ".properties": "📝",
  // Documentation
  ".md": "📝",
  ".mdx": "📝",
  ".txt": "📄",
  ".rtf": "📄",
  ".pdf": "📕",
  ".doc": "📘",
  ".docx": "📘",
  ".odt": "📘",
  ".tex": "📚",
  ".rst": "📝",
  ".asciidoc": "📝",
  // Database
  ".sql": "🗄️",
  ".db": "🗄️",
  ".sqlite": "🗄️",
  ".sqlite3": "🗄️",
  // Images
  ".png": "🖼️",
  ".jpg": "🖼️",
  ".jpeg": "🖼️",
  ".gif": "🖼️",
  ".svg": "🎨",
  ".ico": "🖼️",
  ".webp": "🖼️",
  ".bmp": "🖼️",
  ".tiff": "🖼️",
  // Audio/Video
  ".mp3": "🎵",
  ".wav": "🎵",
  ".flac": "🎵",
  ".mp4": "🎬",
  ".avi": "🎬",
  ".mkv": "🎬",
  ".webm": "🎬",
  // Archives
  ".zip": "📦",
  ".rar": "📦",
  ".7z": "📦",
  ".tar": "📦",
  ".gz": "📦",
  ".bz2": "📦",
  ".xz": "📦",
  // Build and package files
  ".lock": "🔒",
  ".log": "📋",
  ".tmp": "🗑️",
  ".bak": "💾",
  ".orig": "💾",
  ".swp": "💾",
  ".swo": "💾",
};

interface FunctionInfo {
  name: string;
  parameters: string;
  content: string;
  lineNumber: number;
  type?: string; // function, method, class, etc.
}

interface TreeOptions {
  depth: number;
  output: string;
  fileExtensions?: string[];
  showHidden?: boolean;
  includeSize?: boolean;
  maxFunctionLines?: number;
}

/**
 * Returns an icon based on the file extension or type (for directories).
 * @param type 'directory' or file extension (e.g., '.js').
 * @returns The corresponding icon or a generic icon if not found.
 */
function getIcon(type: "directory" | string): string {
  return ICONS[type] || "📄"; // Default icon for files if not found
}

/**
 * Formats file size in human-readable format
 * @param bytes Size in bytes
 * @returns Formatted size string
 */
function formatFileSize(bytes: number): string {
  const units = ["B", "KB", "MB", "GB", "TB"];
  let size = bytes;
  let unitIndex = 0;

  while (size >= 1024 && unitIndex < units.length - 1) {
    size /= 1024;
    unitIndex++;
  }

  return `${size.toFixed(unitIndex === 0 ? 0 : 1)} ${units[unitIndex]}`;
}

/**
 * Registers the 'tree:md:fn' command in the Commander application.
 * @param program The Commander instance.
 */
export function registerTreeMarkdownFnAllCommand(program: Command): void {
  program
    .command("tree:md:fn:all")
    .argument("<directory>", "The directory path to analyze.")
    .description(
      "Generates a directory tree in Markdown format with icons for files and directories, including function extraction.",
    )
    .option(
      "-d, --depth <number>",
      "Maximum depth of the tree (0 for current directory only)",
      (val) => parseInt(val, 10),
      Infinity,
    )
    .option(
      "-o, --output <filename>",
      "Output Markdown filename",
      "tree-structure.md",
    )
    .option(
      "-e, --file-extensions <extensions>",
      "File extensions to analyze for functions (e.g., .ts,.js,.py,.php,.java,.cpp,.c,.rb,.go)",
      (val) => val.split(",").map((ext) => ext.trim().toLowerCase()),
    )
    .option("--show-hidden", "Include hidden files and directories")
    .option("--include-size", "Include file sizes in the output")
    .option(
      "--max-function-lines <number>",
      "Maximum lines to show for each function",
      (val) => parseInt(val, 10),
      10,
    )
    .action(async (directory: string, options: TreeOptions) => {
      const resolvedDirectory = path.resolve(directory);
      const {
        depth = Infinity,
        output = "tree-structure.md",
        fileExtensions = [],
        showHidden = false,
        includeSize = false,
        maxFunctionLines = 10,
      } = options;

      console.log(
        `🌳 Generating Markdown tree for directory: ${resolvedDirectory}`,
      );
      console.log(
        `📏 Maximum depth: ${depth === Infinity ? "unlimited" : depth}`,
      );
      console.log(`📝 Output file: ${output}`);
      if (fileExtensions.length > 0) {
        console.log(
          `🔍 File extensions to analyze: ${fileExtensions.join(", ")}`,
        );
      }
      if (showHidden) {
        console.log(`👁️  Including hidden files`);
      }
      if (includeSize) {
        console.log(`📊 Including file sizes`);
      }

      try {
        const debugLogPath = path.join(
          path.dirname(output),
          "debug_functions.log",
        );

        // Clear debug log
        await fs.ensureFile(debugLogPath);
        await fs.writeFile(debugLogPath, "");

        const markdown = await generateTreeMarkdown(
          resolvedDirectory,
          depth,
          0,
          "",
          DEFAULT_IGNORED_FOLDERS,
          {
            fileExtensions,
            showHidden,
            includeSize,
            maxFunctionLines,
            debugLogPath,
          },
        );

        const header = generateMarkdownHeader(resolvedDirectory, options);
        const fullMarkdown = header + markdown;

        await fs.writeFile(output, fullMarkdown, "utf-8");
        console.log(`\n✅ Markdown tree generated and saved to '${output}'.`);
      } catch (error: any) {
        console.error(
          `\n❌ Error occurred while generating tree: ${error.message}`,
        );
        process.exit(1);
      }
    });
}

/**
 * Generates a Markdown header with metadata
 */
function generateMarkdownHeader(
  directory: string,
  options: TreeOptions,
): string {
  const timestamp = new Date().toISOString();
  const { depth, fileExtensions, showHidden, includeSize } = options;

  return `# Directory Tree: ${path.basename(directory)}

**Generated on:** ${timestamp}  
**Directory:** \`${directory}\`  
**Max Depth:** ${depth === Infinity ? "Unlimited" : depth}  
**File Extensions Analyzed:** ${fileExtensions?.length ? fileExtensions.join(", ") : "None"}  
**Show Hidden Files:** ${showHidden ? "Yes" : "No"}  
**Include File Sizes:** ${includeSize ? "Yes" : "No"}  

---

`;
}

/**
 * Generates a directory tree in Markdown format.
 * @param dir The absolute path of the directory.
 * @param maxDepth The maximum depth to explore (Infinity for unlimited).
 * @param currentDepth The current depth.
 * @param prefix The indentation prefix for display.
 * @param ignoredFolders The folder names to ignore.
 * @param options Additional options for tree generation.
 * @returns A promise resolved with the Markdown string of the tree.
 */
async function generateTreeMarkdown(
  dir: string,
  maxDepth: number,
  currentDepth: number = 0,
  prefix: string = "",
  ignoredFolders: string[] = DEFAULT_IGNORED_FOLDERS,
  options: {
    fileExtensions: string[];
    showHidden: boolean;
    includeSize: boolean;
    maxFunctionLines: number;
    debugLogPath: string;
  },
): Promise<string> {
  if (currentDepth > maxDepth) {
    return "";
  }

  let markdown = "";
  let entries: fs.Dirent[];

  try {
    entries = await fs.readdir(dir, { withFileTypes: true });

    // Filter entries based on options
    entries = entries.filter((entry) => {
      // Skip ignored folders
      if (ignoredFolders.includes(entry.name)) {
        return false;
      }

      // Skip hidden files unless showHidden is true
      if (!options.showHidden && entry.name.startsWith(".")) {
        return false;
      }

      return true;
    });

    // Sort entries: directories first, then files, both alphabetically
    entries.sort((a, b) => {
      if (a.isDirectory() && !b.isDirectory()) return -1;
      if (!a.isDirectory() && b.isDirectory()) return 1;
      return a.name.localeCompare(b.name);
    });
  } catch (e: any) {
    if (e.code === "EACCES") {
      return `${prefix}├── [Access Denied: ${path.basename(dir)}]\n`;
    }
    console.warn(`Warning: Unable to read directory ${dir}: ${e.message}`);
    return "";
  }

  for (let i = 0; i < entries.length; i++) {
    const entry = entries[i];
    const entryPath = path.join(dir, entry.name);
    const isLast = i === entries.length - 1;
    const connector = isLast ? "└── " : "├── ";
    const childPrefix = prefix + (isLast ? "    " : "│   ");

    if (entry.isDirectory()) {
      const icon = getIcon("directory");
      markdown += `${prefix}${connector}${icon} **${entry.name}/**\n`;

      // Recursively process subdirectory
      markdown += await generateTreeMarkdown(
        entryPath,
        maxDepth,
        currentDepth + 1,
        childPrefix,
        ignoredFolders,
        options,
      );
    } else if (entry.isFile()) {
      const extension = path.extname(entry.name).toLowerCase();
      const icon = getIcon(extension);
      let fileLine = `${prefix}${connector}${icon} ${entry.name}`;

      // Add file size if requested
      if (options.includeSize) {
        try {
          const stats = await fs.stat(entryPath);
          fileLine += ` *(${formatFileSize(stats.size)})*`;
        } catch (error) {
          // Ignore size errors
        }
      }

      markdown += `${fileLine}\n`;

      // Extract functions if extension matches
      if (options.fileExtensions.includes(extension)) {
        try {
          const functions = await extractFunctionsFromFile(
            entryPath,
            options.debugLogPath,
            options.maxFunctionLines,
          );
          if (functions.length > 0) {
            markdown += `${childPrefix}*Functions found:*\n`;
            functions.forEach((func) => {
              markdown += `${childPrefix}  - 🔧 **${func.name}**(${func.parameters}) *(line ${func.lineNumber})*\n`;
              if (func.content.trim()) {
                markdown += `${childPrefix}    \`\`\`${getLanguageFromExtension(extension)}\n`;
                markdown += `${childPrefix}    ${func.content.split("\n").join(`\n${childPrefix}    `)}\n`;
                markdown += `${childPrefix}    \`\`\`\n`;
              }
            });
          }
        } catch (error: any) {
          await fs.appendFile(
            options.debugLogPath,
            `Error processing ${entryPath}: ${error.message}\n`,
          );
        }
      }
    }
  }

  return markdown;
}

/**
 * Gets the language identifier for code blocks based on file extension
 */
function getLanguageFromExtension(extension: string): string {
  const languageMap: { [key: string]: string } = {
    ".js": "javascript",
    ".jsx": "javascript",
    ".ts": "typescript",
    ".tsx": "typescript",
    ".py": "python",
    ".java": "java",
    ".cpp": "cpp",
    ".c": "c",
    ".h": "c",
    ".hpp": "cpp",
    ".php": "php",
    ".rb": "ruby",
    ".go": "go",
    ".rs": "rust",
    ".swift": "swift",
    ".kt": "kotlin",
    ".scala": "scala",
    ".cs": "csharp",
    ".vb": "vb",
    ".r": "r",
    ".m": "objc",
    ".pl": "perl",
    ".sh": "bash",
    ".bash": "bash",
    ".zsh": "zsh",
    ".fish": "fish",
    ".ps1": "powershell",
    ".lua": "lua",
    ".dart": "dart",
    ".elm": "elm",
    ".clj": "clojure",
    ".ex": "elixir",
    ".exs": "elixir",
    ".erl": "erlang",
    ".f90": "fortran",
    ".f95": "fortran",
    ".pas": "pascal",
    ".asm": "assembly",
    ".s": "assembly",
  };

  return languageMap[extension] || "text";
}

/**
 * Enhanced function extraction with better regex patterns and error handling
 */
async function extractFunctionsFromFile(
  filePath: string,
  debugLogPath: string,
  maxLines: number = 10,
): Promise<FunctionInfo[]> {
  const functions: FunctionInfo[] = [];

  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    const extension = path.extname(filePath).toLowerCase();

    await fs.appendFile(debugLogPath, `\n--- Processing ${filePath} ---\n`);

    const patterns = getFunctionPatterns(extension);
    if (!patterns.length) {
      await fs.appendFile(
        debugLogPath,
        `No patterns defined for ${extension}\n`,
      );
      return functions;
    }

    for (const pattern of patterns) {
      const regex = new RegExp(pattern.regex, "gm");
      let match;
      let matchCount = 0;

      while ((match = regex.exec(fileContent)) !== null) {
        matchCount++;
        const functionInfo = pattern.extractor(match, fileContent, maxLines);
        if (functionInfo) {
          functions.push(functionInfo);

          await fs.appendFile(
            debugLogPath,
            `  Found ${pattern.type}: ${functionInfo.name} at line ${functionInfo.lineNumber}\n`,
          );
        }
      }

      if (matchCount === 0) {
        await fs.appendFile(
          debugLogPath,
          `  No matches for pattern: ${pattern.type}\n`,
        );
      }
    }
  } catch (error: any) {
    await fs.appendFile(
      debugLogPath,
      `Error extracting functions from ${filePath}: ${error.message}\n`,
    );
    console.error(
      `Error extracting functions from ${filePath}: ${error.message}`,
    );
  }

  return functions;
}

/**
 * Gets function extraction patterns for different file types
 */
function getFunctionPatterns(extension: string): Array<{
  type: string;
  regex: string;
  extractor: (
    match: RegExpExecArray,
    content: string,
    maxLines: number,
  ) => FunctionInfo | null;
}> {
  const getLineNumber = (content: string, index: number): number => {
    return (content.substring(0, index).match(/\n/g) || []).length + 1;
  };

  const extractFunctionBody = (
    content: string,
    startIndex: number,
    maxLines: number,
  ): string => {
    const lines = content.substring(startIndex).split("\n");
    const bodyLines = lines.slice(0, maxLines);
    const result = bodyLines.join("\n").trim();
    return result + (lines.length > maxLines ? "\n..." : "");
  };

  switch (extension) {
    case ".ts":
    case ".js":
    case ".jsx":
    case ".tsx":
      return [
        {
          type: "function",
          regex:
            "(?:export\\s+)?(?:async\\s+)?function\\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\\s*\\(([^)]*)\\)\\s*\\{",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: match[2] || "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "function",
          }),
        },
        {
          type: "arrow function",
          regex:
            "(?:export\\s+)?(?:const|let|var)\\s+([a-zA-Z_$][0-9a-zA-Z_$]*)\\s*=\\s*(?:async\\s+)?\\(([^)]*)\\)\\s*=>",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: match[2] || "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "arrow function",
          }),
        },
        {
          type: "method",
          regex:
            "(?:async\\s+)?([a-zA-Z_$][0-9a-zA-Z_$]*)\\s*\\(([^)]*)\\)\\s*\\{",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: match[2] || "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "method",
          }),
        },
      ];

    case ".py":
      return [
        {
          type: "function",
          regex: "def\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(([^)]*)\\)\\s*:",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: match[2] || "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "function",
          }),
        },
        {
          type: "class",
          regex: "class\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*(?:\\([^)]*\\))?\\s*:",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "class",
          }),
        },
      ];

    case ".java":
      return [
        {
          type: "method",
          regex:
            "(?:public|protected|private|static|final|abstract|\\s)*\\s*[\\w\\<\\>\\[\\]]+\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(([^)]*)\\)\\s*\\{",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: match[2] || "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "method",
          }),
        },
      ];

    case ".php":
      return [
        {
          type: "function",
          regex: "function\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(([^)]*)\\)",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: match[2] || "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "function",
          }),
        },
      ];

    case ".cpp":
    case ".c":
    case ".h":
    case ".hpp":
      return [
        {
          type: "function",
          regex:
            "(?:(?:inline|virtual|explicit|static|friend|const|constexpr|extern)\\s+)*[\\w\\<\\>\\[\\]]+\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(([^)]*)\\)",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: match[2] || "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "function",
          }),
        },
      ];

    case ".rb":
      return [
        {
          type: "method",
          regex: "def\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*(?:\\(([^)]*)\\))?",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: match[2] || "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "method",
          }),
        },
      ];

    case ".go":
      return [
        {
          type: "function",
          regex:
            "func(?:\\s+\\([a-zA-Z_][a-zA-Z0-9_]*\\s+[\\w\\.]+\\))?\\s+([a-zA-Z_][a-zA-Z0-9_]*)\\s*\\(([^)]*)\\)",
          extractor: (match, content, maxLines) => ({
            name: match[1],
            parameters: match[2] || "",
            content: extractFunctionBody(content, match.index!, maxLines),
            lineNumber: getLineNumber(content, match.index!),
            type: "function",
          }),
        },
      ];

    default:
      return [];
  }
}

/*
I can see this is a TypeScript file that implements a CLI command for generating a directory tree in Markdown format with function extraction capabilities. Let me analyze the code and provide some observations and potential improvements.I've created an enhanced version of your directory tree generator with several improvements:

## Key Enhancements:

### 1. **Expanded Icon Support**
- Added icons for 50+ file types including programming languages, web technologies, data formats, images, archives, and more
- Better visual representation with specific icons forreact (.tsx/.jsx), Rust (.rs), Swift (.swift), etc.

### 2. **Improved Function Extraction**
- Enhanced regex patterns for better function detection
- Support for arrow functions, async functions, classes, and methods
- Better handling of different programming paradigms
- Configurable maximum lines per function display

### 3. **Enhanced CLI Options**
- `--show-hidden`: Include hidden files and directories
- `--include-size`: Display file sizes in human-readable format
- `--max-function-lines`: Control how many lines of function code to display

### 4. **Better Structure and Organization**
- Added proper TypeScript interfaces
- Separated concerns with dedicated functions
- Improved error handling and logging
- Added metadata header to generated markdown

### 5. **Code Quality Improvements**
- Better regex patterns for each language
- Modular function extraction system
- Improved file filtering logic
- More robust error handling

### 6. **Enhanced Output**
- Professional markdown formatting with proper headers
- Better code block formatting with language specification
- File size display option
- Clearer function signatures with parameter display

The enhanced version maintains backward compatibility while adding significant new functionality. It's more maintainable, extensible, and provides better user experience with more detailed output and flexible options.
*/
