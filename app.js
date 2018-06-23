const option = {
    subject: 'Hello Admin',
    to: 'Your.Email@gmail.com',
    bcc: '',        // Not require
    text: 'Dear Admin,\n\n' +

        'Welcome to Tata-shrimp-pilot project. \n\n'  +

        'Thanks \n'+
        'Tata-shrimp-pilot dev team'

}


const email = require('./email.js');

email.sendEmail(option, function(response) {
    if(response.status){
        console.log("Success ", response.data);
    } else {
        console.log("Error ", response.message);
    }
});