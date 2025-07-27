import { Router } from "express";
import getUsers from "../../controllers/users/getUsers.controller.js";
import getMe from "../../controllers/users/getMe.controller.js";
import deleteUsers from "../../controllers/users/deleteUsers.controller.js";

const router = Router();
router.get('/api/users', getUsers);
router.get('/api/users/me', getMe);
router.delete('/api/users', deleteUsers)

export default router;