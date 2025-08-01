import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Home Page, Welcome!</h1>");
});

app.get("/about", (req, res) => {
    res.send("<h1>About Me</h1><p>Welcome! I'm Severinus Ndonwi.</p>");
});

app.get("/contact", (req, res) => {
    res.send("<h1>Contact Me</h1><p>Phone:+15871234568</p>");
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});