import express from "express";
const app = express();
const port = 8080;

//#region SERVIR CONTENIDO ESTATICO
app.use(express.static("public"));
//#endregion

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log(`Ejemplo ejecutandose en el puerto: ${port}`);
});
