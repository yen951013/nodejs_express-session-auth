import authRouter from "./api/authRoutes.js";
import userRouter from "./api/usersRoutes.js";

export default (app) => {
  app.use(authRouter)
  app.use(userRouter)
};