const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = proces.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true }
);
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const templatesRouter = require('.routes/templates');
const usersRouter = require('.routes/users');

app.use('/templates', templatesRouter);
app.use('/users', usersRouter);

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})