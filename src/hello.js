import nodemailer from "nodemailer"


exports.handler = async (event, context) => {

let testAccount = await nodemailer.createTestAccount()

let transporter = nodemailer.createTransport({
host: 'smtp.ethereal.email',
port: 587,
secure: false,
auth: {
  user: testAccount.user,
  pass: testAccount.pass,
}
})

let info = await transporter.sendMail({
  from: 'sender@example.com',
  to: 'rotimidokun@gmail.com',
  subject: 'subject_sample',
  text: 'text_sample',
})

console.log('Message sent: %s', info.messageId)
console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))


  return { statusCode: 200  }

};

