import { Router } from "express";
import { validate } from "../../middlewares/validate.middleware.js";
import { registerSchema, loginSchema } from "../../validations/user.validation.js";
import register from "../../controllers/auth/register.controller.js";
import login from "../../controllers/auth/login.controller.js";
import logout from "../../controllers/auth/logout.controller.js";

const router = Router();
router.post('/api/auth/register', validate(registerSchema), register);
router.post('/api/auth/login', validate(loginSchema), login);
router.post('/api/auth/logout', logout);

export default router;