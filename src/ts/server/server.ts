import express, {type Express} from 'express';
import path from 'path';

// Create a new express application instance
const app: Express = express();


// The port the express app will listen on
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;

// Serve wasm files
app.use('/wasm', express.static(path.join(__dirname, '../public', 'wasm')));

// Serve js files
app.use('/js', express.static(path.join(__dirname, '../public', 'js')));

// Serve css files
app.use('/css', express.static(path.join(__dirname, '../public', 'css')));

// Serve your app
app.get('/', (req: express.Request, res: express.Response): void => {
    res.sendFile(path.join(__dirname, '../public', 'index.html'));
});

// Serve the application at the given port
app.listen(port, (): void => {
    console.log(`App is listening on http://localhost:${port}`);
});
