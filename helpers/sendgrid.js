const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)


const sendMail = (email) => {
    const msg = {
        to: email,
        from: process.env.SENDGRID_EMAIL,
        subject: 'Welcome',
        text: 'Welcome!, thanks for registering!',
        html: `
                Welcome!, thanks for registering! 
                <strong>sending with sendgrid</strong>
            `,
      }
      
    sgMail
        .send(msg)
        .then((response) => {
            console.log(response[0].statusCode)
            console.log(response[0].headers)
        })
        .catch((error) => {
            console.error(error)
        })
      
}


module.exports = {
    sendMail
}