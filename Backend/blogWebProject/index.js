import express from 'express';
import ejs from 'ejs';
import path from 'path';
import { fileURLToPath } from 'url';
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// Set EJS as the view engine
app.set('view engine', 'ejs');

// Set the views directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
app.set('views', path.join(__dirname, 'views'));


app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {
const posts = [
    { id: 1, title: "Rich Dad, Poor Dad" },
    { id: 2, title: "Path to Prosperity" },
    { id: 3, title: "The Intelligent Investor" },
    { id: 4, title: "The Millionaire Next Door" },
    { id: 5, title: "Think and Grow Rich" },
    { id: 6, title: "The Richest man in Babylon" },
    { id: 7, title: "The Psychology of Money" },
    { id: 8, title: "The Barefoot Investor" },
    { id: 9, title: "The Total Money Makeover" },
   { id: 10, title: "Your Money or Your Life" }
];  

// Render the index.ejs file and pass the posts data
   res.render("index.ejs", { posts });
});

app.get("/create", (req, res) => {
    const postTitle = req.body.title;
    const postContent = req.body.content;
res.render("partials/create.ejs", { post: { title: postTitle, content: postContent } });
});

app.post("/blog/create", (req, res) => {
    const postTitle = req.body.title;
    const postContent = req.body.content;
   res.render("partials/post.ejs", { post: { title: postTitle, content: postContent } });
});

app.get("/post/:id", (req, res) => {
    const postId = req.params.id;
    const posts = [
         { id: 1, title: "Rich Dad, Poor Dad", content: "The rich don't work for money, money works for them.Work to learn and not to earn." },
         { id: 2, title: "Path to Prosperity", content: "The path to prosperity is paved with financial education and smart investments." },
         { id: 3, title: "The Intelligent Investor", content: "Investing is about managing risk, not avoiding it." },
         { id: 4, title: "The Millionaire Next Door", content: "Wealth is often hidden in plain sight, in the habits of ordinary people." },
         { id: 5, title: "Think and Grow Rich", content: "Your thoughts shape your reality; think positively to attract wealth." },
         { id: 6, title: "The Riches man in Babylon", content: "A part of all you earn is yours to keep; save and invest wisely." },
         { id: 7, title: "The Psychology of Money", content: "Understanding your emotions around money is key to financial success." },
         { id: 8, title: "The Barefoot Investor", content: "Simplicity in managing your finances leads to greater peace of mind." },
         { id: 9, title: "The Total Money Makeover", content: "A step-by-step plan to take control of your finances and build wealth." },
         { id: 10, title: "Your Money or Your Life", content: "Transform your relationship with money and achieve financial independence." }
    ];
   res.render("partials/post.ejs", { post: posts.find(post => post.id === parseInt(postId)) });
});


app.listen(port, () => {
   console.log(`server is running on port ${port}`);
});



