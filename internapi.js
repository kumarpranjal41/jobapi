const express =require('express');
const dbconnect2 = require('./connection2');
const app = express();


app.get('/intern', async(req , resp)=>{
    let data = await dbconnect2();
    data =await data.find().toArray();
    console.log(data);
    resp.send(data);
});

app.listen(process.env.PORT || 9000);