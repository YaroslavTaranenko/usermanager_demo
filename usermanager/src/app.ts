import express, { Express, Request, Response } from 'express';
import path from 'path';
import ejs from 'ejs';
import dotenv from 'dotenv';
import cors, { CorsOptions } from 'cors';

const corsOptions: CorsOptions = {
    origin: 'https://super-duper-succotash-69pxx9vp44rfgjv-8040.app.github.dev/',
    allowedHeaders: ['Access-Control-Allow-Origin', 'Content-Type'],
    optionsSuccessStatus: 200
};


dotenv.config();

const app: Express = express();
const port = Number(process.env['PORT']) || 3000;
app.use(cors());
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set the path to the views directory
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Define a route for the home page
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});