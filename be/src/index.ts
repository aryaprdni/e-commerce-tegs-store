import express from 'express';
import { errorMiddleware } from './middleware/error-middleware';
import { publicRouter } from './route/public-api';
import { apiRouter } from './route/api';
import cloudinary from './libs/cloudinary';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());
app.use(publicRouter);
app.use(apiRouter);
app.use(errorMiddleware);
cloudinary.config();

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})