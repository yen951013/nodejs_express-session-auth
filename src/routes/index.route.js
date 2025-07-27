import authRouter from "./api/auth.route.js";
import userRouter from "./api/users.route.js";

export default (app) => {
  app.use(authRouter)
  app.use(userRouter)
};