import express from "express";
import { Router } from "express";
import { addUser, getUser } from "./controller.js";
import { success, error } from "../../network/response.js";
const controller = { addUser, getUser };
const response = { success, error };
const router = Router();

router.get('/', (req, res) => {
    controller.getUser()
    .then(data => {
        response.success(req, res, data, 200);
    })
    .catch(e => {
        response.error(req, res, 'Internal error', 500, e);
    });
});

//------------------Con query params /user?name=xNombre--------------
router.post('/', (req, res) => {
    const { name } = req.query; // Lee el query parameter 'name'

    if (!name) {
        response.error(req, res, 'Name parameter is required', 400);
        return;
    }

    controller.addUser(name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(e => {
            response.error(req, res, 'Internal error', 500, e);
        });
});

//-------------Con path params /user/xnombre----------------
// router.post('/:name', (req, res) => {
//     const { name } = req.params; // Lee el query parameter 'name'

//     if (!name) {
//         response.error(req, res, 'Name parameter is required', 400);
//         return;
//     }

//     controller.addUser(name)
//         .then(data => {
//             response.success(req, res, data, 201);
//         })
//         .catch(e => {
//             response.error(req, res, 'Internal error', 500, e);
//         });
// });

export { router };