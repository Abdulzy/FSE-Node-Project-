/**
 * @file Implements an Express Node HTTP server.
 */
import express, {Request, Response} from 'express';
const mongoose = require('mongoose');
import bodyParser from "body-parser";
import dotenv from "dotenv";
import TuitController from "./controllers/TuitController";
import UserController from "./controllers/UserController";
const cors = require('cors')
const app = express();

dotenv.config();
app.use(cors());
app.use(express.json());

const MONGODB_URI = "mongodb://localhost:27017/tuiter";
mongoose.connect(process.env.MONGODB_URI || MONGODB_URI);



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get('/', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!!!!'));

app.get('/hello', (req: Request, res: Response) =>
    res.send('Welcome to Foundation of Software Engineering!'));

app.get('/add/:a/:b', (req, res) => {
    res.send(req.params.a + req.params.b);
})

UserController.getInstance(app);
TuitController.getInstance(app);


/**
 * Start a server listening at port 4000 locally
 * but use environment variable PORT on Heroku if available.
 */
const PORT = 4000;
app.listen(process.env.PORT || PORT);
