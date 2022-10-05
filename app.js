const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const morgan = require('morgan')
const app = express();
const port = process.env.PORT || 3000;
const notes = require('./routes/notes')

app.use(morgan('tiny'));
app.use(express.json());

//Routes
app.use('/notes', notes)







app.listen(port, () => {
    console.log(`Server running in port ${port}`)
})