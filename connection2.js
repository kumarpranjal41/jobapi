const {MongoClient} =require('mongodb');
const url ='mongodb+srv://pranjal41:Panjabuniversity2000%40@pranjalcluster.yh7o9sk.mongodb.net/interndb?retryWrites=true&w=majority';
const databaseNmae='interndb'
const  client = new MongoClient(url);

/////
async function dbconnect2(){
    let result = await client.connect();
    db = result.db(databaseNmae);
    return db.collection('internapi');
}


module.exports =dbconnect2;