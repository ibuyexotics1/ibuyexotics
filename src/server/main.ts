import dotenv from 'dotenv'
dotenv.config({ path: '.env.development' })
import express from "express";
import ViteExpress from "vite-express";
import bodyParser from 'body-parser'
import emailRouter from "./routes/email.route.js";

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/api/email', emailRouter);

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);