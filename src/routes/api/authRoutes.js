import { Router } from "express";
import register from "../../controllers/auth/register.js";
import login from "../../controllers/auth/login.js";
import logout from "../../controllers/auth/logout.js";

const router = Router();
router.post('/api/auth/register', register);
router.post('/api/auth/login', login);
router.post('/api/auth/logout', logout);

export default router;