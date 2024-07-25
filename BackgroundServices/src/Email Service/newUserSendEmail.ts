import ejs from "ejs";
import { DBHelper } from "../Database Helpers";
import path from "path";
import dotenv from "dotenv";

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


export async function sendEmailNewUser() {

    const users = (await dbInstance.query("SELECT * FROM users WHERE isEmailSent=0")).recordset as IUser[]

    if (users) {

        users.forEach(async (user) => {

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
                        <title>Welcome to Citizen Connect 360</title>
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

                    .content ul {
                        padding-left: 20px;
                    }

                    .content ul li {
                        margin-bottom: 10px;
                        color: #555555;
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
                                <h1>Welcome to Citizen Connect 360!</h1>
                            </div>
                            <div class="content">
                                <p>Dear ${user.username},</p>
                                <p>Thank you for joining Citizen Connect 360! We're excited to have you as part of our community.</p>
                                <p>At Citizen Connect 360, you can:</p>
                                <ul>
                                    <li>Stay informed with simplified explanations of government documents and policies.</li>
                                    <li>Participate in polls and surveys to express your views on important issues.</li>
                                    <li>Engage in discussions with fellow citizens.</li>
                                    <li>Report incidents and track real-time responses during emergencies.</li>
                                </ul>
                                <p>Your participation is crucial in shaping a better future. Get involved, share your opinion, and make a difference with Citizen Connect 360!</p>
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


             await dbInstance.query(`UPDATE users SET isEmailSent=1 WHERE id='${user.id}'`)
            // })



        })
    }
    console.log("No users found")

}