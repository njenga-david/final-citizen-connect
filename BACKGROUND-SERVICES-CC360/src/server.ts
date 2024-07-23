import express, { json } from 'express'
import { sendEmailNewUser } from './Email Service/newUserSendEmail';
import cron from 'node-cron'
import { sendPasswordResetEmail } from './Email Service/newPasswordResetRequest';

const app = express()
app.use(json())

cron.schedule('*/10 * * * * *', async () => {
    console.log('Sending new user email every 10 seconds');
    sendEmailNewUser();
})

cron.schedule('*/10 * * * * *', async () => {
    console.log('Sending new password reset email every 10 seconds');
    sendPasswordResetEmail();
})





const port = 2000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})