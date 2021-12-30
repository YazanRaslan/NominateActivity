import express from 'express';
import { Request, Response } from 'express';
const app = express();
const port = 8080;

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`server has been started at http://localhost:${port}`);
});