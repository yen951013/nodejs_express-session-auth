import { Router } from "express";
import getUsers from "../../controllers/users/getUsers.js";
import getMe from "../../controllers/users/getMe.js";
import deleteUsers from "../../controllers/users/deleteUsers.js";

const router = Router();
router.get('/api/users', getUsers);
router.get('/api/users/me', getMe);
router.delete('/api/users', deleteUsers)

export default router;