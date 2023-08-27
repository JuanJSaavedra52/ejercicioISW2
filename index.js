import express from "express";
import bodyParser from "body-parser";
import { routes } from "./network/routes.js";
const app = express();
// const router = routes;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;
routes(app);

app.listen(port, () => {
    console.log("Puerto escuchando en http://localhost:3000");
});

console.log("Hello world");
