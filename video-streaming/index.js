const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();
const movieData = require("./movieData"); // Assume this is an array containing the list of movies

app.get("/movies", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(movieData));
});

app.get("/movies/:id", (req, res) => {
  const movie = movieData.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send("Movie not found");
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(movie));
});

app.get("/stream/:id", (req, res) => {
  const movie = movieData.find((m) => m.id === parseInt(req.params.id));
  if (!movie) return res.status(404).send("Movie not found");
  const videoPath = path.join(__dirname, movie.path);
  const stat = fs.statSync(videoPath);
  const fileSize = stat.size;
  const range = req.headers.range;
  if (range) {
    const parts = range.replace(/bytes=/, "").split("-");
    const start = parseInt(parts[0], 10);
    const end = parts[1] ? parseInt(parts[1], 10) : fileSize - 1;
    const chunksize = end - start + 1;
    const file = fs.createReadStream(videoPath, { start, end });
    const head = {
      "Content-Range": `bytes ${start}-${end}/${fileSize}`,
      "Accept-Ranges": "bytes",
      "Content-Length": chunksize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(206, head);
    file.pipe(res);
  } else {
    const head = {
      "Content-Length": fileSize,
      "Content-Type": "video/mp4",
    };
    res.writeHead(200, head);
    fs.createReadStream(videoPath).pipe(res);
  }
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
