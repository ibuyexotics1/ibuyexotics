import dotenv from 'dotenv'
dotenv.config({ path: '.env.development' })
import express from "express";
import ViteExpress from "vite-express";
import bodyParser from 'body-parser'
import emailRouter from "./routes/email.route.js";
import multer from 'multer'

const upload = multer({ dest: 'uploads/' });

const app = express();
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use('/email', emailRouter);

app.post('/test', upload.single('image'), function (req, res, next) {
  console.log(req)
  console.log(req.file)
})

ViteExpress.listen(app, 3000, () =>
  console.log("Server is listening on port 3000..."),
);