let Database = require("../models/Database");
class Task{
    id = 0;
    user_id = 0;
    tdate = "";
    ttime = "";
    task = "";
    status = "";

    query = "";
    db = new Database.Database();

    constructor(){
        this.id = 0;
        this.user_id = 0;
        this.tdate = "";
        this.ttime = "";
        this.task = "";
        this.status = "";

    }
    save = ()=>{
        if(this.id == 0)
        {
            this.query = "INSERT INTO tasks (user_id, tdate, ttime, task, status) ";
            this.query += "VALUES (" + this.user_id + ",'" + this.tdate + "','" + this.ttime + "','" + this.task + "','open')";
        }

        else
        {
            this.query = "UPDATE tasks SET user_id=" + this.user_id +" ,  tdate= '" + this.tdate +"' ,ttime='" + this.ttime +"'  ,task='" + this.task +"' WHERE id=" + this.id ;
        }
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
        
    }

    deletetask = ()=>{
        this.query = "DELETE FROM tasks  WHERE id =" + this.id
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

    change = ()=>{
        this.query = "UPDATE tasks SET status='closed' WHERE id =" + this.id;
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

    get = () =>{
        this.query = "SELECT * FROM tasks WHERE id=" +this.id;
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }

    list = () =>{
        this.query = "SELECT * FROM tasks WHERE user_id=" +this.user_id;
        console.log(this.query);
        return new Promise((resolve, rejects)=> {
            this.db.query(this.query,(err, result)=>{
                this.db.close();
                if (err) {
                    return rejects(err);
                }
                resolve(result);
            });
        });
    }
}

module.exports ={
    Task:Task
}