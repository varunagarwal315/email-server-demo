# Email Sending Demo    
Email sending using node-mailer code.

## 1. Email Configuration `config.json`
```sh
{
    "service"       : "gmail",   // You can use SMTP also
    "service_port"  : 465,      // for SMTP, 587
    "name"          : "tata-shrimp-pilot",  // Name 
    "user"          : "tata-shrimp-pilot@gmail.com",  // your credentials from emails
    "pass"          : "123456789",          // your credentials from emails
    "from"          : "Shrimp Pilot Support<tata-shrimp-pilot@gmail.com>"  // From Email
}
```

## 2. Sending Email after Configuration

```sh
// Install dependancies
$ npm install    
$ node server.js
OR
$ npm start
```