import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

import poemRoutes from './routes/poems.js';

const app = express();
dotenv.config();

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.use('/poem', poemRoutes);

//app.get('/', (req, res) => {
   // res.send('APP IS RUNNING.');
//})

const PORT = process.env.PORT || 5000; 

app.listen(PORT, () => {
   console.log("connected");
}); 

mongoose.connect(process.env.MONGO_URL, {
   useNewUrlParser: true, useUnifiedTopology: true
})
.then(console.log("Connected"))
.catch((err) => console.log(err));


//mongoose.connect(process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
    //.then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    //.catch((error) => console.log(error.message));

//mongoose.connect("mongodb+srv://avester:FishSlippers3@poetryapp.07f1d.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true})
    
