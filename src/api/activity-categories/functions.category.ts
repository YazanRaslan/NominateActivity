import { RequestHandler, Request, Response } from "express";
import { categories } from "../../seed-data/categories";

export const GetActivityCategories: RequestHandler[] = [
    async (req: Request, res: Response) => {
        try {
            res.status(200).json(categories);
        } catch (error) {
            console.error(error);
            res.status(error.status || 500).send('IAn Error occurred while getting the activity categories');
        }
    }
]