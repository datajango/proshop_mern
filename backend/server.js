import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import colors from 'colors';
import productRoutes from './routes/product-routes.js';
import { notFound, errorHandler } from './middleware/error-middleware.js';

dotenv.config();

const conn = connectDb();

const app = express();

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next();
});

app.get('/', (req, res) => {
    res.send('API is running');
});

app.use('/api/products', productRoutes);

app.use(notFound);

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT,
    console.log(`Server running in ${process.env.MODE} on port ${PORT}`.yellow.bold));
