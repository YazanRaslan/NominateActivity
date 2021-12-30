import express from 'express';
import { categoriesRoutes } from './api/activity-categories/routes.category';
const app = express();
const port = 8080;

app.use( categoriesRoutes );

app.listen(port, () => {
    console.log(`server has been started at http://localhost:${port}`);
});