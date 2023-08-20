import express from "express";
const port = 8080;

const app = express();

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Ejemplo ejecutandose en el puerto: ${port}`);
});
