const express = require("express")
const nodemailer = require("nodemailer");
const app = express();
app.use(express.json());

app.post("/sendmail", async (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 587,
        secure: false,
        auth: {
          // TODO: replace `user` and `pass` values from <https://forwardemail.net>
          user: "builoc191999@gmail.com",
          pass: "",
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
        // send mail with defined transport object
         await transporter.sendMail({
          from: '"Fred Foo 👻" <foo@example.com>', // sender address
          to: "", // list of receivers
          subject: "Hello ✔", // Subject line
          text: "Hello world?", // plain text body
          html: "<b>Hello world?</b>", // html body
        }, (err)=>{
            if(err){
                return res.json({
                    message: err
                })
            }
            return res.json({
                message: "Success"
            })
        })
      
});


const PORT = process.env.PORT || 8080;
app.listen(PORT, console.log(`server run with port ${PORT}`))