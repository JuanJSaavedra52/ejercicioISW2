import express from "express"
import bodyParser from "body-parser";

const app = express();

app.use(bodyParser.json());

const port = 3000;

app.listen(port, () => {
    console.log("Puerto escuchando en http:localhost:3000");
})

console.log("Hello world");