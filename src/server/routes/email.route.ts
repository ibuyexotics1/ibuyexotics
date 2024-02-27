import express from 'express';
import emailController from '../controllers/email.controller.js';
import multer from 'multer'

const upload = multer({
  storage: multer.memoryStorage()
});

const emailRouter = express.Router();

emailRouter.post('/', upload.array('carImages'), emailController.sendEmail);

export default emailRouter