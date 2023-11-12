import express from 'express';
import http from 'http';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

import authRoutes from './src/routes/authRoutes.js';
import channelsRoutes from './src/routes/channelsRoutes.js';

dotenv.config();

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();

app.use(cors());

app.use(express.json());

app.get('/', (req, res) => {
    return res.send('This is your server');
});

app.use('/api/auth', authRoutes);
app.use('/api/channels', channelsRoutes);

const server = http.createServer(app);

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    server.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
}).catch((err) => {
    console.log("Database connection failed. Server is not started");
    console.log(err);
});





