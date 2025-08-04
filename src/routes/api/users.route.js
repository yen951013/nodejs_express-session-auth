import { Router } from "express";
import { isAuthenticated, isAdmin } from "../../middlewares/auth.middleware.js";
import getUsers from "../../controllers/users/getUsers.controller.js";
import getMe from "../../controllers/users/getMe.controller.js";
import deleteUsers from "../../controllers/users/deleteUsers.controller.js";

const router = Router();
router.get('/api/users', isAuthenticated, isAdmin, getUsers);
router.get('/api/users/me', isAuthenticated, getMe);
router.delete('/api/users', isAuthenticated, isAdmin, deleteUsers)

export default router;