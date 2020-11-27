const DbConnection = require("./dbConnection")

class User {
    async insertUser() {
        const db = await DbConnection.getDb();
        const users = db.collection("users")
        const user = {
            name: "Huzaifa Arain",
            email: "huzaifa@itgroup@gmail.com",
            isSuper: true,
        };
        const result = await users.insertOne(user);
        console.log(result)
    }
}

module.exports = new User;