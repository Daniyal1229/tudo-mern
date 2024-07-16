import express from "express";
import dotenv from "dotenv";
import { db } from "./config/db.js";
import route from "./routes/routes.js";
import methodOverride from 'method-override'
import cors from "cors"
dotenv.config();
const app = express();
db();
app.set('view engine', 'ejs');


// Middlewares
app.use(methodOverride('_method'))
app.use(cors())
app.use(express.json());
app.use(express.urlencoded())
app.use("/task",route)

export default app;
