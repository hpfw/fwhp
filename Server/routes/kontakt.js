var express = require('express');
var router = express.Router();
var app = require('.././app');
var nodemailer = require('nodemailer');

 
router.post('/', function(req, res) {
    nodemailer.createTestAccount((err, account) => {

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: 'smtp.web.de',
            port:  	587 ,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "fwhp@web.de", // generated ethereal user
                pass: "!2C3=oÖzXaN19"  // generated ethereal password
            }
        });
    
        // setup email data with unicode symbols
        let mailOptions = {
            from: 'req.body.name '+ " <"+'req.body.email'+">", // sender address
            to: 'info@feuerwehr-waldburg.com', // list of receivers
            subject: "Anfrage HP", // Subject line
            text: 'req.body.comments', 
        };
    
        // send mail with defined transport object
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
     
            }
        });
    });

    res.send({status: true})
});

module.exports = router;