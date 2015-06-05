var Task = require("../models/tasks");

exports.getTasks = function (req, res) {
	res.send("Getting all tasks");
};

exports.getTask = function (req, res) {
	res.send("Getting a single task");
};

exports.addTask = function (req, res) {
	res.send("Adding a task");
};

exports.updateTask = function (req, res) {
	res.send("Updating a task>");
};

exports.deleteTask = function (req, res) {
	res.send("deleted the task");
};