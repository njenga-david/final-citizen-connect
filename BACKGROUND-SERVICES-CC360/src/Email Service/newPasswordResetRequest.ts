import ejs from "ejs";
import { DBHelper } from "../Database Helpers";
import path from "path";
import dotenv from "dotenv";
import { v4 as uuidv4 } from 'uuid';
import { sendMail } from "../Email Helpers";

dotenv.config({ path: path.resolve(__dirname, "../../.env") })



export interface IUser {
    id: string,
    username: string,
    email: string,
    password: string,
    role: string,
    status: number;
    isDelted: number,
    isEmailsent: number
}

const dbInstance = new DBHelper()


export async function sendPasswordResetEmail() {

    const users = (await dbInstance.query("SELECT * FROM users WHERE passwordReset=1")).recordset as IUser[]

    if (users) {

        users.forEach(async (user) => {

            const resetToken = uuidv4();
            const resetTokenExpires = new Date(Date.now() + 3600000); // Token expires in 1 hour
    
           
            const userName = user.username

            // ejs.renderFile(path.resolve(__dirname, "../../Templates/newuser.ejs"), { userName }, async (err, data) => {

            const messageOptions = {
                from: "jameskaromo2@gmail.com",
                to: user.email,
                subject: 'Welcome To Citizen Connect 360',
                html: 
                `
                    <!DOCTYPE html>
                    <html lang="en">
                    <head>
                        <meta charset="UTF-8">
                        <meta name="viewport" content="width=device-width, initial-scale=1.0">
                        <title>Password Reset - Citizen Connect 360</title>
                        <style>
                            body {
                                font-family: Arial, sans-serif;
                                margin: 0;
                                padding: 0;
                                background-color: #f5f5f5;
                            }

                            .container {
                                max-width: 600px;
                                margin: 20px auto;
                                padding: 20px;
                                background-color: #ffffff;
                                border-radius: 8px;
                                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                            }

                            .header {
                                text-align: center;
                                padding: 10px 0;
                                background-color: #1E90FF;
                                color: #ffffff;
                                border-radius: 8px 8px 0 0;
                            }

                            .content {
                                padding: 20px;
                            }

                            .content p {
                                line-height: 1.6;
                                color: #333333;
                            }

                            .content a.button {
                                display: inline-block;
                                margin-top: 20px;
                                padding: 10px 20px;
                                background-color: #1E90FF;
                                color: #ffffff;
                                text-decoration: none;
                                border-radius: 5px;
                            }

                            .footer {
                                text-align: center;
                                padding: 10px 0;
                                background-color: #1E90FF;
                                color: #ffffff;
                                border-radius: 0 0 8px 8px;
                            }
                        </style>
                    </head>
                    <body>
                        <div class="container">
                            <div class="header">
                                <h1>Citizen Connect 360</h1>
                            </div>
                            <div class="content">
                                <p>Dear ${user.username},</p>
                                <p>We received a request to reset your password for your Citizen Connect 360 account. Click the button below to reset your password:</p>
                                <a href="${`http://your-frontend-url/reset-password?token=${resetToken}&userid=${user.id}`}" class="button">Reset Password</a>
                                <p>If you did not request a password reset, please ignore this email. Your password will remain unchanged.</p>
                                <p>Best regards,<br>The Citizen Connect 360 Team</p>
                            </div>
                            <div class="footer">
                                <p>&copy; 2024 Citizen Connect 360. All rights reserved.</p>
                            </div>
                        </div>
                    </body>
                    </html>


                `

            }

            console.log(messageOptions)
             sendMail(messageOptions)

             await dbInstance.query(`UPDATE users SET passwordReset=0 WHERE id='${user.id}'`)
            // })



        })
    }
    console.log("No users found")

}