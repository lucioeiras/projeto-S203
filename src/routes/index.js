import { Router } from "express";

import userRouter from "./User.js";
import movieRouter from "./Movie.js";

const routes = Router();

routes.use(userRouter);
routes.use(movieRouter);

export default routes;
