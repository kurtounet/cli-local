import fs from "node:fs";
import path from "node:path";
import { BaseService } from "./base-service.service.js";
import { IPluginManager } from "@/types/services/plugin-manager.interface.js";

export class PluginManager extends BaseService implements IPluginManager {}
