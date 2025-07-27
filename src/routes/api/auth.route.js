import { Router } from "express";
import register from "../../controllers/auth/register.controller.js";
import login from "../../controllers/auth/login.controller.js";
import logout from "../../controllers/auth/logout.controller.js";

const router = Router();
router.post('/api/auth/register', register);
router.post('/api/auth/login', login);
router.post('/api/auth/logout', logout);

export default router;