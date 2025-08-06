import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

export function uploadsDir() {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    // Remonter d'un niveau vers la racine du projet
    const uploadDir = path.join(__dirname, "..", "uploads");

    if (!fs.existsSync(uploadDir)) {
        fs.mkdirSync(uploadDir);
    }
}
