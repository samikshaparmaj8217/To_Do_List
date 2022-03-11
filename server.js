var express = require("express");
var bodyparser = require("body-parser");
var cookieparser = require("cookie-parser");
var multer = require("multer");
const User = require("./models/User");
const Task = require("./models/Task");
var app = express();
app.use(express.json());
app.use(express.static("public"));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/pages/login.html");
    
});

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/pages/registration.html");
    
});

app.post("/register", async (req, res) => {
    let body = req.body;
    let user = new User.User();
    user.id = 0;
    user.name = body.data.name;
    user.email = body.data.email;
    user.password = body.data.password;

    user.register().then(result => {
        console.log("Result")
        console.log(result);
        let data = {
            "data": {
                "id": result.insertId,
                "status": "success"
            }
        };
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "data": {
                    "status": "fail"
                }
            };
            res.end(JSON.stringify(data));
        });
});

app.post("/login", async (req, res) => {
    let body = req.body;
    var user = new User.User();
    user.email = body.data.email;
    user.password = body.data.password;

    user.login().then(result => {
        console.log("Result")
        console.log(result);
        let data = {
            "status": "fail"
        }

        if (result.length != 0) {
            data = {
                "status": "success",
                "data": result
            }
        }
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
        });
});

app.post("/savetask", async (req, res) => {
    let body = req.body;
    var task = new Task.Task();
    task.id = body.data.id;
    task.user_id = body.data.user_id;
    task.tdate = body.data.tdate;
    task.ttime = body.data.ttime;
    task.task = body.data.task;
    task.status = body.data.status;

    task.save().then(result => {

        let data = {
            "status": "success",
            "data": result
        }


        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
            console.log(err)
        });
});

app.post("/deletetask", async (req, res) => {
    let body = req.body;
    var task = new Task.Task();
    task.id = body.data.id;
    task.user_id = body.data.user_id;
    task.tdate = body.data.tdate;
    task.ttime = body.data.ttime;
    task.task = body.data.task;
    task.status = body.data.status;

    task.deletetask().then(result => {

        let data = {
            "status": "success",
            "data": result
        }


        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
            console.log(err)
        });
});

app.post("/change", async (req, res) => {
    let body = req.body;
    var task = new Task.Task();
    task.id = body.data.id;
    task.user_id = body.data.user_id;
    task.tdate = body.data.tdate;
    task.ttime = body.data.ttime;
    task.task = body.data.task;
    task.status = body.data.status;

    task.change().then(result => {

        let data = {
            "status": "success",
            "data": result
        }


        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
            console.log(err)
        });
});

app.get("/gettask", async (req, res) => {
    let body = req.body;
    var task = new Task.Task();
    task.id = body.data.id;
    task.user_id = body.data.user_id;
    task.tdate = body.data.tdate;
    task.ttime = body.data.ttime;
    task.task = body.data.task;
    task.status = body.data.status;

    task.get().then(result => {

        let data = {
            "status": "success",
            "data": result
        }
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
            console.log(err);
        });
});


app.get("/listtask", async (req, res) => {
    let body = req.body;
    var task = new Task.Task();
    task.id = body.data.id;
    task.user_id = body.data.user_id;
    task.tdate = body.data.tdate;
    task.ttime = body.data.ttime;
    task.task = body.data.task;
    task.status = body.data.status;

    task.list().then(result => {

        let data = {
            "status": "success",
            "data": result
        }
        res.end(JSON.stringify(data));
    },
        err => {
            let data = {
                "status": "fail"
            }
            res.end(JSON.stringify(data));
            console.log(err);
        });
});




app.listen(8081, function () {
    console.log("Started");
});