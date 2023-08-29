import express from "express";
import bodyParser from "body-parser";
import { routes } from "./network/routes.js";
import { sendNotification, startNotificationListener } from "./listener.mjs";


const app = express();
// const router = routes;
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = 3000;
routes(app);

startNotificationListener();

app.post("/", (req, res)=> {
    // console.log(req.body);
    sendNotification(req.body)
    res.send("Petición POST")
})

app.listen(port, () => {
    console.log("Puerto escuchando en http://localhost:3000");
});

console.log("Hello world");
