const {MongoClient} =require('mongodb');
const url ='mongodb+srv://pranjal41:Panjabuniversity2000%40@pranjalcluster.yh7o9sk.mongodb.net/pranjaldb?retryWrites=true&w=majority';
const databaseNmae='pranjaldb'
const  client = new MongoClient(url);

/////
async function dbconnect(){
    let result = await client.connect();
    db = result.db(databaseNmae);
    return db.collection('jobapi');
}

module.exports =dbconnect;