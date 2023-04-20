import { attachControllers } from "@decorators/express";
import express from "express";
import { Admin } from "./controllers/Admin/Admin.controller";

const routes = express.Router();

attachControllers(routes, [Admin]);

export { routes };
