
let mysql = require("mysql");
class Database {

    constructor() {
        this.con = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "",
            database: "to_do_list"
        });
    }


    query=(sql, arg) => {
        return new Promise((resolve, rejects) => {
            this.con.query(sql, arg,  (err, result)=> {
                if (err) {
                    console.log("Database;"+ err)
                    return rejects(err)
                }
                resolve(result);
            });
        });
    }
    close() {
        return new Promise( (resolve, rejects)=> {
            this.con.end((err)=> {
                if(err) {
                    rejects(err);
                }
                resolve("Succes")
            });
        });
    }


}
module.exports = {
    Database: Database
}