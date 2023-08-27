import express from "express";
import { Router } from "express";


const router = Router(); // Cambia "Router" por "Router()"

router.get('/', (req, res) => {
    res.send("Hola");
});

router.get('/tol', (req, res) => {
    res.send("tol");
});

export { router };