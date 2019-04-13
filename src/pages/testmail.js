import nodemailer from 'nodemailer'

const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'alleereact@gmail.com', // your email
      pass: 'allee1234' // your email password
    }
  });
  let mailOptions = {
    from: 'alleereact@gmail.com',                // sender
    to: 'allee2470@gmail.com',                // list of receivers
    subject: 'Hello from sender',              // Mail subject
    html: '<b>Do you receive this mail?</b>'   // HTML body
  };
  Transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });
 export default Transporter
 