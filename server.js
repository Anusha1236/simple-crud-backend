const express=require('express');
const app=express();
const cors=require('cors');
const dotEnv=require('dotenv');
const dbConfig = require('./app/config/db.config');
const db = require('./app/models/index');
dotEnv.config();
const PORT = process.env.PORT || 10100;
app.use(cors());
app.use(express.json());
app.listen(PORT,()=>{
    console.log(`server listening on the port ${PORT}`);
});

db.mongoose.connect(`mongodb://${dbConfig.HOST}:${dbConfig.PORT}/${dbConfig.DB}`)
.then(()=>{
    console.log(`mongoDB connected......`)
})
.catch(error=>console.log(error));

require('./app/routes/plate.route')(app)