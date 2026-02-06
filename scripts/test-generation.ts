import { AiService } from "../src/services/ai.service";
import path from "path";
import fs from "fs";

async function main() {
  console.log("🧪 Testing Automatic Plugin Generation...");

  const aiService = new AiService();
  
  // Simulate the tool call arguments
  const args = {
    name: "blague",
    instruction: "Crée un plugin nommé 'blague' qui raconte une blague"
  };

  try {
    console.log(`Generating plugin '${args.name}'...`);
    const pluginId = await aiService.generatePlugin(args.instruction);
    
    console.log(`✅ Plugin ID generated: ${pluginId}`);

    // Verify directory existence
    const pluginDir = path.join(aiService.pluginsPath, pluginId);
    if (fs.existsSync(pluginDir) && fs.lstatSync(pluginDir).isDirectory()) {
        console.log(`🎉 SUCCESS: Directory ${pluginId} created!`);
        
        if(fs.existsSync(path.join(pluginDir, "manifest.json"))) console.log("   - manifest.json exists");
        if(fs.existsSync(path.join(pluginDir, `${pluginId}.service.js`))) console.log("   - Service file exists");
        
    } else {
        console.error("❌ ERROR: Plugin directory not found!");
    }

  } catch (error) {
    console.error("❌ Test Failed:", error);
  }
}

main();
