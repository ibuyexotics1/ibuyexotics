import { Request, Response } from 'express';
import emailService from '../services/email.service.js';

class EmailController {
  public async sendEmail(req: Request, res: Response): Promise<void> {
    try {
      const files = Array.isArray(req.files) ? req.files : Object.values(req.files || {});

      await emailService.sendEmail(req.body, files);
      res.status(200).send('Email sent successfully');
    } catch (error) {
      console.error('Failed to send email:', error);
      res.status(500).send('Failed to send email');
    }
  }
}

const emailController = new EmailController();

export default emailController;
