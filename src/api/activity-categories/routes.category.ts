import { Router } from "express";
import { GetActivityCategories } from "./functions.category";
export const categoriesRoutes: Router = Router();

categoriesRoutes.route('/categories').get(GetActivityCategories);