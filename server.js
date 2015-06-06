var express = require("express");
var bodyParser = require("body-parser");
var app = express();
var router = express.Router();
var taskController = require("./controllers/tasks");
var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/tasker");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

app.use("/api", router);

router.route("/tasks/:userId").get(taskController.getTasks);
router.route("/task/:taskId").get(taskController.getTask);
router.route("/addTask").post(taskController.addTask);
router.route("/updateTask/:taskId").post(taskController.updateTask);
router.route("/deleteTask/:taskId").get(taskController.deleteTask);

app.listen(3000);
