const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const cors = require('cors');

const port = 8080;

const postRoutes = require('./routes/post');
const MONGO_URI = "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX";

mongoose.connect(MONGO_URI).then(() => console.log('DB connnected'));

mongoose.connection.on('error', err => {
    console.log(`DB connection error: ${err.message}`);
});

// const myOwnMiddleware = (req, res, next) => {
//     console.log("Middleware is applied");
//     next();
// };

// middleware
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(expressValidator());
app.use(cors());
// app.use(myOwnMiddleware);

app.use("/", postRoutes);

app.listen(port, () => {
    console.log(`A Node.js API is listening on port ${port}`);
});
