const functions = require("firebase-functions");

const express = require("express");
const cors = require("cors");

const stripe = require("stripe")('sk_test_51HgmjGCKLwLCt0PfZKKi8QAtSiFAk4fPk3b2fSnazZLCmxmNQKOBNRljRkHJwIC5OznDpehFQCIWEOQ2Mu6Brb4V00Chmwvhlk');

// API

// - App Config
const app = express();

// -  Middleware
app.use(cors({origin: true}));
app.use(express.json());

// -  API routes
app.get('/', (req, res) => res.status(200).send('Hello World'));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of currency
        currency: "usd"
    });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// -  Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-3aaab/us-central1/api