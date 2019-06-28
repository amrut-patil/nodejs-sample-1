
const sgMail = require('@sendgrid/mail');

const sendGridAPIKey = 'SG.nklG2Qq-Ssui9HSJJfSl9A.fAtnqIQLeyfxe7AmvikhWSA0MOSC-lSNqbcn4A421kQ';

sgMail.setApiKey(sendGridAPIKey);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amrut.patil@hotmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    });
}

const sendCancelationfEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'amrut.patil@hotmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    });
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationfEmail
}