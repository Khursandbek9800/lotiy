const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
var nodemailer = require('nodemailer');
const path = require('path')
const app = express();

const dev = process.env.NODE_ENV !== 'production';
const port = process.env.PORT || 5000;

const corsOptions ={
    origin:'https://akbar-consulting',
    credentials:true,            //access-control-allow-credentials:true
    optionSuccessStatus:200
}
app.use(cors(corsOptions));
app.use(fileUpload());



app.post('/upload', (req, res) => {
    console.log(req.body.num1)
    if(req.files === null) {
        return res.status(400).json({msg: 'No file was uploaded'});
    }

    const file = req.files.file;

    file.mv(`${__dirname}/public/uploads/${file.name}`, err => {
        if(err) {
            console.error(err);

            return res.status(500).send(err);
        }

        res.json({ fileName: file.name, filePath: `/uploads/${file.name}` });
    });
    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'khursand0090@gmail.com',
            pass: '1145257x'
        }
    });

    var mailOptions = {
        from: 'khursand0090@gmail.com',
        // to: 'developer.bob.uz@gmail.com',
        to: 'sarvarali7725@gmail.com',
        subject: 'This email is sent from EverbestLab.com',
        text: `        Ism - ${req.body.name}
        Familya - ${req.body.surname}
        Tel1 - ${req.body.num1}
        Tel2 - ${req.body.num2}
        Email - ${req.body.email}
        Address - ${req.body.address}
        Tug'ilgan sanasi - ${req.body.date}
        Davlat - ${req.body.country}
        Universitet - ${req.body.university}
        `,
        attachments: [{
            filename: file.name,
            path: `${__dirname}/public/uploads/${file.name}`
        }]
    };

    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
});
// if (process.env.NODE_ENV === 'production'){
//     app.use(express.static('client/build'))
//     app.get('*', (req,res) => {
//         res.sendFile(path.resolve(__dirname,'client','build','index.html'));
//     })
// }
app.listen(port, () => console.log(`server started on port ${port}`))