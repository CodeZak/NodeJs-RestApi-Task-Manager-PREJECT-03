const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email,name)=> {
    sgMail.send({
        to: email,
        from: 'mahi.zakariae@gmail.com',
        subject: 'This is my first creation!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
    })
}

const accountCancelationEmail = (email,name)=> {
    sgMail.send({
        to: email,
        from: 'mahi.zakariae@gmail.com',
        subject: 'why canceling, why?!',
        text: `We are sorry to know that you're leaving, ${name}. is there anything we can do to make this a better experience for you.`
    })
}


module.exports = {sendWelcomeEmail,accountCancelationEmail}