var express = require('express');
var app = express();
var router = express.Router();
var taskController = require("./controllers/tasks");

app.use("/api", router);

router.route("/tasks").get(taskController.getTasks);
router.route("/task").get(taskController.getTask);
router.route("/addTask").post(taskController.addTask);
router.route("/updateTask").post(taskController.updateTask);
router.route("/deleteTask").get(taskController.deleteTask);

app.listen(3000);
