const nodemailer = require('nodemailer');
const config = require('./config.json');


let transporter = nodemailer.createTransport({
    host: 'smtp.'+config.service+'.com',
    port: config.service_port,
    secure: ((config.service == "gmail")? true : false), // true for 465, false for other ports
    tls:{
        ciphers:'SSLv3'
    },
    auth: {
        user: config.user, // generated ethereal user
        pass: config.pass // generated ethereal password
    }
});

const sendEmail = (option, callback) => {
  if(typeof option == "object") {
        option['from'] = config.from;

        transporter.sendMail(option, (error, info) => {
            if (error) {
                return callback({ status: false, message: error });
            }
            callback({ status: true, data : info });
        });
  }else{
    return callback({ status: false, message: "Passed input must be an object." });
  }
}

module.exports = {
  sendEmail : sendEmail
}