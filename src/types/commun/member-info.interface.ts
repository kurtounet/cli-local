export interface IMemberInfo {
  name: string;
  type: "function" | "class" | "method" | "interface" | "property";
  visibility: "public" | "private" | "protected";
  description?: string;
  returnType?: string;
  arguments: any[];
}
