
var Database = require("../models/Database");
class User {
    id = 0;
    name = "";
    email = "";
    password = "";

    query = "";
    db = new Database.Database();

    constructor() {
        this.id = 0;
        this.name = "";
        this.email = "";
        this.password = "";
    }

    register=()=> {
        this.query = "INSERT INTO users(name, email, password) ";
        this.query += "VALUES('" + this.name + "','" + this.email + "','" + this.password + "')";
        
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    };

    login(){
        this.query = "SELECT * FROM users WHERE email = '"+ this.email.replace(/'/g,"''")+"' AND password = '"+ this.password +"'  ";
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query, (err, result)=> {
                this.db.close();
                if(err){
                    return rejects(err);
                }
                resolve(result);
            });
        });

    }
}
module.exports = {
    User: User
}