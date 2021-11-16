const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51JwHX9BAc2AiBWhiKxmOTTNXRLeO1aEhhsyDu5OLZlprcpRkhWuBltGjvfk015YnxaqZVJU7cDpqRD7Hs911z69Y00609doAzV');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json()); // allow sending data

// - API routes
app.get('/', (req, res) => {
    res.status(200).send('Hello World');
})

app.post('/payments/create', async (req, res) => {
    const total = req.query.total;
    console.log('Payment Request Received for this amount >>>', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, //subunits of the currency
        currency: "usd",
    });

    // OK - created 
    res.status(201).send({
        clientSecret: paymentIntent.client_secret,
        
    })
})


// - Listen command
exports.api = functions.https.onRequest(app);


// API endpoint - http://localhost:5001/clone-2798a/us-central1/api


// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });




