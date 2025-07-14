import express from "express";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";



const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 6600





app.use(express.json());



const buildPath = path.join(__dirname, "dist");
if (fs.existsSync(buildPath)) {
    app.use(express.static(buildPath));
    app.get("/*", (req, res) => {
        res.sendFile(path.join(buildPath, "index.html"));
    });
}


app.use((req, res) => {
    res.status(404).send("404 - Not Found");
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("500 - Internal Server Error");
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on PORT 🚀 ${PORT}`);
});
