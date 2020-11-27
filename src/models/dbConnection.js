
const mongodb = require("mongodb")
const MongoClient = mongodb.MongoClient

const connectionURL = "mongodb://127.0.0.1:27017"
const databaseName = "weather-app"

class DbConnection{
    connectionURL = "mongodb://127.0.0.1:27017"
    databaseName = "weather-app"
    dbInstance = null
    client = null
    db = null

    async initialize(){
        this.dbInstance = new MongoClient(this.connectionURL,{useNewUrlParser:true})
        this.client = await this.dbInstance.connect()
        this.db = this.client.db(this.databaseName)
    }

    async getClient(){
        await this.initialize()
        return this.dbInstance
    }

    async getDb(){
        await this.initialize()
        return this.db
    }
}

// const dbInstance = new MongoClient(connectionURL,{useNewUrlParser:true})
// const db = null
// const getClient = async () => {
//     try{
//         const client = await dbInstance.connect()
//         db = dbInstance.db(databaseName)
//         return dbInstance;    
//     }catch(e){
//         console.log("Unable to connect to database!")
//     }
    
// }
module.exports = new DbConnection;