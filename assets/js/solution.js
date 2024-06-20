const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = process.env.PORT || 5500;

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Endpoint to handle form submission
app.post('/submit-form', (req, res) => {
    const formData = req.body;

    // Create transporter with SMTP settings
    let transporter = nodemailer.createTransport({
        service: 'Gmail', // Use your email service
        auth: {
            user: 'adityapal07012005@gmail.com', // Your email address
            pass: 'udqu efuy joiv xivw' // Your email password
        }
    });

    // Email content
    let mailOptions = {
        from: 'adityapal07012005@gmail.com', // Sender email
        to: formData['client-email'], // Receiver email (Client's email)
        subject: 'Onsite Visit Report', // Subject line
        text: `
            Client Company Name: ${formData['client-name']}
            Date of Visit: ${formData['visit-date']}
            Contact Person: ${formData['contact-person']}
            Contact Number: ${formData['contact-number']}
            Reason for Visit: ${formData['reason-visit']}
            Time In: ${formData['time-in']}
            Time Out: ${formData['time-out']}
            Was Backup Taken before any changes were made? ${formData['backup-taken']}
            Description of work done: ${formData['work-done']}
            Outcome of the visit: ${formData['outcome-visit']}
        `
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Internal Server Error');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Email sent successfully');
        }
    });
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
