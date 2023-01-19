import express from "express";

const app = express();

app.get("/release", (request, response) => {
  return response.send("Hello World!");
});