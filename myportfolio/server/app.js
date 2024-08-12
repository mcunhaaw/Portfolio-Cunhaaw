const express = require("express");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

const user = "cunhaa.mcss@gmail.com"
const pass = "1581mcss!!"

app.get('/', (req, res) => res.send("Funcionando!"))

app.get('/', (req, res) => {
    const transporter = nodemailer.createTransport({
        host: "smtp.umbler.com",
        port: 587,
        auth:{user, pass}
    })

    transporter.sendMail({
        from: user,
        to: user,
        replyTo: "cunhaa.mcss@gmail.com",
        subject: "Teste de envio de email",
        text: "Teste de envio de email",
    }).then(info=>{
        res.send(info)
    }).catch(error => (
        res.send(error)
    ))
})

app.listen(port, () => console.log(`Servidor na porta ${port}!`))//