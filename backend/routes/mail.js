const router = require('express').Router();
const nodemailer = require('nodemailer');
require("dotenv").config();

function sendEmail({ recipient_email, OTP }) {
    return new Promise((resolve, reject) => {
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.MY_EMAIL,
          pass: process.env.MY_PASSWORD,
        },
      });
  
      const mail_configs = {
        from: process.env.MY_EMAIL,
        to: recipient_email,
        subject: "Password Reset OTP",
        html: `<!DOCTYPE html>
  <html lang="en" >
  <head>
    <meta charset="UTF-8">
    <title>CodePen - OTP Email Template</title>

  </head>
  <body>
  <!-- partial:index.partial.html -->
  <div style="font-family: Helvetica,Arial,sans-serif;min-width:1000px;overflow:auto;line-height:2">
    <div style="margin:50px auto;width:70%;padding:20px 0">
      <div style="border-bottom:1px solid #eee">
        <a href="" style="font-size:1.4em;color: #00466a;text-decoration:none;font-weight:600">NGO Dapp</a>
      </div>
      <p style="font-size:1.1em">Hi,</p>
      <p>Use the following OTP to complete your Password Recovery Procedure.</p>
      <h2 style="background: #00466a;margin: 0 auto;width: max-content;padding: 0 10px;color: #fff;border-radius: 4px;">${OTP}</h2>
      <p style="font-size:0.9em;">Regards</p>
      <hr style="border:none;border-top:1px solid #eee" />
    </div>
  </div>
  <!-- partial -->
    
  </body>
  </html>`,
      };
      transporter.sendMail(mail_configs, function (error, info) {
        if (error) {
          console.log(error);
          return reject({ message: `An error has occured` });
        }
        return resolve({ message: "Email sent succesfuly" });
      });
    });
}

router.get("/getemail", (req,res) => {
    console.log(`The email is:${process.env.MY_EMAIL}`);
    res.send(process.env.MY_EMAIL);
})
router.post("/sendemail", async(req,res) =>{
    sendEmail(req.body)
    .then((response) => res.send(response.message))
    .catch((error) => res.status(500).send(error.message));
    // res.status(201).json("Mail sent successfully...");
});


module.exports = router;