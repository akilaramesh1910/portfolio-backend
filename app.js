const express = require("express");
const cors = require('cors');
require("dotenv").config();
const bodyParser = require("body-parser");

const app = express();


const allowedOrigins = [
    'http://localhost:3000',
    // need to add url here
];

const corsOptions = {
    origin: (origin, callback) => {
        if (!origin) return callback(null, true);
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true
};

app.use(cors(corsOptions));
app.use(bodyParser.json());

const contactRoutes = require("./routes/contactRoutes");

app.use("/api/contact", contactRoutes);

module.exports = app;