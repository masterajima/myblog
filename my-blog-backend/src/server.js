import express from "express";
import { MongoClient } from "mongodb";
let articleInfo = [
  {
    name: "learn-react",
    upvote: "0",
    comment: [],
  },
  {
    name: "learn-node",
    upvote: "0",
    comment: [],
  },
];
const app = express();
app.use(express.json());
app.get("/api/articles/:name/", async (req, res) => {
  const { name } = req.params;
  //connect to database
  const client = new MongoClient("mongodb://127.0.0.1:27017");
  await client.connect();
  const db = client.db("react-blog-db"); //use react-blog-db
});
app.get("/hello", (req, res) => {
  res.send("hello");
});
app.get("/hello", (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}`);
});
app.put("/api/articles/:name/upvote", (req, res) => {
  const { name } = req.params;
  const article = articleInfo.find((a) => a.name === name);
  if (article) {
    article.upvote += 1;
    res.send(`The ${name} article now has ${article.upvote}upvote`);
  } else {
    console.log(`article does not exit`);
  }
});
app.post("/", (req, res) => {
  const { name } = req.params;
  const { postedBy } = req.body;
  const article = articleInfo.find((a) => a.name == name);
  if (article) {
    article.comment.push({ postedBy, text });
    res.send(article.comment);
  } else {
    console.log(`article does not exit`);
  }
});
app.listen(8000, () => {
  console.log("server is listening on port 8000");
});
