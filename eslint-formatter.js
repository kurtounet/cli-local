// my-formatter.js
export default function(results, context) {
  let output = "--- MON RAPPORT LINT PERSO ---\n";

  results.forEach(result => {
    if (result.messages.length > 0) {
      output += `Fichier: ${result.filePath}\n`;
      result.messages.forEach(msg => {
        output += `  [${msg.severity === 2 ? 'ERREUR' : 'WARNING'}] Ligne ${msg.line}: ${msg.message}\n`;
      });
    }
  });

  return output + "------------------------------";
}