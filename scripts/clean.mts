import fs from "node:fs";
import path from "node:path";

function removeClassFiles(directory: string): void {
  for (const entry of fs.readdirSync(directory, { withFileTypes: true })) {
    const fullPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      removeClassFiles(fullPath);
    } else if (entry.isFile() && entry.name.endsWith(".class")) {
      fs.unlinkSync(fullPath);
      console.log(`Removed: ${fullPath}`);
    }
  }
}

removeClassFiles(".");
console.log("Cleanup complete.");
