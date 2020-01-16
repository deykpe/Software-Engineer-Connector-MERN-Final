const express = require('express');
const connectDB = require('./config/db');

const app = express();

//Connect Database

connectDB();

app.get('/', (req, res) => res.send('Api Running'));

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`Server starting on ${PORT}`));
