import dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config({ path: '.env.development' });

class EmailService {
    private transporter: nodemailer.Transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASS
            }
        });
    }

    public async sendEmail(formData: any, files: any[]): Promise<void> {
        try {
            // Form information body
            let formInfoBody = '';
            Object.entries(formData.vin).forEach(([key, value]) => {
                formInfoBody += `<li>${key}: ${value}</li>`;
            })

            Object.entries(formData.personalData).forEach(([key, value]) => {
                formInfoBody += `<li>${key}: ${value}</li>`;
            })

            Object.entries(formData.carData).forEach(([key, value]) => {
                formInfoBody += `<li>${key}: ${value}</li>`;
            })

            // Vin information body
            let vinInfoBody = '';
            Object.entries(formData.vinData).forEach(([key, value]) => {
                vinInfoBody += `<li>${key}: ${value}</li>`;
            })

            const carImages = files.map(file => ({ filename: file.originalname, content: file.buffer }));

            const htmlText = `
            <html>
            <head>
              <style>
                body {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                  font-family: Arial, sans-serif;
                }
                h1 {
                font-size: 20px;
                  color: #0e0e0e;
                  font-weight: bold;
                }
                h2 {
                    font-size: 20px;
                    color: #0e0e0e;
                    font-weight: bold;
                    border-bottom: 1px solid #ccc; 
                    padding-bottom: 5px; 
                }
                ul {
                    list-style-type: none;
                }
                li {
                    font-size: 15px;
                    margin: 10px;
                    background: #e8e9eb;
                    padding: 5px 10px;
                }
              </style>
            </head>
            <body>
                <h2>Form Information</h2>
                <ul>
                    ${formInfoBody}
                </ul>
                <h2>VIN Data (NHTSA)</h2>
                <ul>
                    ${vinInfoBody}
                </ul>
            </body>
          </html>`

            await this.transporter.sendMail({
                from: process.env.GMAIL_USER,
                to: process.env.GMAIL_USER,
                subject: 'I Buy Exotics - VIN Request Quote',
                html: htmlText,
                attachments: carImages
            });

            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email:', error);
            throw error;
        }
    }
}

const emailService = new EmailService();

export default emailService;
