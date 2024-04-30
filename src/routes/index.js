import { Router } from "express";

import userRouter from "./User.js";

const routes = Router();

routes.use(userRouter);

export default routes;
