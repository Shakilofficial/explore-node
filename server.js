const http = require("node:http");
const url = require("url");
const fs = require("fs");
/* //fake json data
const books = [
  {
    name: "Dune",
    author: "Frank Herbert",
    year: "1965",
    category: "Science Fiction",
  },
  {
    name: "Ender's Game",
    author: "Orson Scott Card",
    year: "1985",
    category: "Science Fiction",
  },
  {
    name: "1984",
    author: "George Orwell",
    year: "1949",
    category: "Science Fiction",
  },
  {
    name: "Fahrenheit 451",
    author: "Ray Bradbury",
    year: "1953",
    category: "Science Fiction",
  },
  {
    name: "Brave New World",
    author: "Aldous Huxley",
    year: "1932",
    category: "Science Fiction",
  },
  {
    name: "The Hitchhiker's Guide to the Galaxy",
    author: "Douglas Adams",
    year: "1979",
    category: "Science Fiction",
  },
  {
    name: "Neuromancer",
    author: "William Gibson",
    year: "1984",
    category: "Science Fiction",
  },
  {
    name: "Snow Crash",
    author: "Neal Stephenson",
    year: "1992",
    category: "Science Fiction",
  },
  {
    name: "The War of the Worlds",
    author: "H.G. Wells",
    year: "1898",
    category: "Science Fiction",
  },
  {
    name: "Foundation",
    author: "Isaac Asimov",
    year: "1951",
    category: "Science Fiction",
  },
]; */

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  const parsedURL = new URL(req.url, `http://${req.headers.host}`);

  const pathName = parsedURL.pathname;

  if (pathName === "/home" && req.method === "GET") {
    fs.readFile(__dirname + "/index.html", "utf-8", (err, data) => {
      if (err) {
        throw new Error("Error ! reading file!");
      }
      res.setHeader("content-type", "text/html");
      res.statusCode = 200;
      res.end(data);
    });
  } else if (pathName === "/books" && req.method === "GET") {
    /*     res.writeHead(200, {
      "content-type": "application/json",
      email: "shakil@gmail.com",
    }); */

    fs.readFile(__dirname + "/books.json", "utf-8", (err, data) => {
      if (err) {
        throw new Error("Error ! reading file!");
      }
      const query = parsedURL.searchParams;
      const bookYear = query.get("year");
      const expectedPost = JSON.parse(data).find(
        (book) => book.year === bookYear
      );
      res.setHeader("content-type", "application/json");
      res.statusCode = 200;
      res.end(JSON.stringify(expectedPost));
      console.log(expectedPost);
    });
  } else {
    res.end("Data Not Found");
  }
});
server.listen(5000, "127.0.0.1", () => {
  console.log("Server is Running on the port 5000");
});
