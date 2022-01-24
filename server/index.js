
const express = require('express')
const app = express();

const mongoose = require('mongoose')



app.use(express.json())

mongoose.connect("mongodb+srv://sandy-21:sandy@cluster0.bpaop.mongodb.net/test", {
    useNewUrlParser  : true,
    useUnifiedTopology:true
}).then(() => console.log('mongodb connected'))
.catch((error) => console.err(error))



app.use('/api', require('./routes/route'))

const port = process.env.PORT || 5000;

app.listen(port, (req, res) => {
    console.log('server is running on port 5000');
})