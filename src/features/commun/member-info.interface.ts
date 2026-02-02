export interface IMemberInfo {
  type: "class" | "function" | "method";
  name: string;
  arguments: string[];
}
