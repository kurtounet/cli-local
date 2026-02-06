export default class {
  static definition = { name: "test", description: "Dit bonjour" };
  async execute(args, context) {
    return { message: "Bonjour depuis le plugin test !" };
  }
}