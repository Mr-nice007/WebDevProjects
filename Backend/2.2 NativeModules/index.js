const fs = require("fs");

fs.writeFile("message2.txt", "Hello from NodeJS and Severinus!", (err) => {
    if (err) {
        console.error("Error writing file:", err);
    } else {
        console.log("File written successfully!");
        // Read the file to verify
        fs.readFile("message2.txt", "utf8", (err, data) => {
            if (err) {
                console.error("Error reading file:", err);
            } else {
                console.log("File content:", data);
            }
        });
    }
});
