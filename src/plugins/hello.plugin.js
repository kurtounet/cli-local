export default class {
  static definition = { name: "hello", description: "Dit bonjour" };
  async execute(args, context) {
    return { message: "Bonjour depuis le plugin !" };
  }
}
