const express =require('express');
const dbconnect = require('./connection');
const app = express();


app.get('/', async(req , resp)=>{
    let data = await dbconnect();
    data =await data.find().sort({ id: -1 }).toArray();
    console.log(data);
    resp.send(data);
});

app.listen(process.env.PORT || 9000);