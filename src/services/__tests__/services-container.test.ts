import { beforeEach,describe, expect, it } from "vitest";

import { IBaseService } from "@/types/base-service.interface.js";

import { ServicesContainer } from "../services-container.js";

// Mock des services pour le test
class MockService1 implements IBaseService {
  name = "MockService1";
  initCalled = false;
  async init(): Promise<void> {
    this.initCalled = true;
  }
}

class MockService2 implements IBaseService {
  name = "MockService2";
  initCalled = false;
  async init(): Promise<void> {
    this.initCalled = true;
  }
}

describe("ServicesContainer", () => {
  let container: ServicesContainer;

  beforeEach(() => {
    container = new ServicesContainer();
  });

  it("should return all registered services as a list of ready-to-use instances", () => {
    const service1 = new MockService1();
    const service2 = new MockService2();

    container.register("Service1", service1);
    container.register("Service2", service2);

    const allServices = container.getAll();

    expect(allServices).toHaveLength(2);
    expect(allServices).toContain(service1);
    expect(allServices).toContain(service2);

    // Ensure all services have an init method (as per IBaseService)
    allServices.forEach((service) => {
      expect(service).toHaveProperty("init");
      expect(typeof service.init).toBe("function");
    });
  });

  it("should return an empty array if no services are registered", () => {
    const allServices = container.getAll();
    expect(allServices).toHaveLength(0);
  });

  it("should not return services that were not registered", () => {
    const service1 = new MockService1();
    container.register("Service1", service1);

    const service3 = new MockService2(); // This service is not registered

    const allServices = container.getAll();
    expect(allServices).not.toContain(service3);
  });
});
