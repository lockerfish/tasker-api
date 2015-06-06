var Task = require("../models/tasks");

exports.getTasks = function (req, res) {

	Task.find({userId:req.params.userId}, function (err, tasks) {
		if (err) {
			res.send(err);
		}

		res.json(tasks);
	});
};

exports.getTask = function (req, res) {

	Task.find({_id:req.params.taskId}, function (err, task) {
		if (err) {
			res.send(err);
		}

		res.json(task);
	})
};

exports.addTask = function (req, res) {
	var task = new Task();

	task.taskTitle = req.body.taskTitle;
	task.taskDescription = req.body.taskDescription;
	task.taskStartDate = req.body.taskStartDate;
	task.taskEndDate = req.body.taskEndDate;
	task.userId = req.body.userId;

	task.save(function (err) {
		if(err) {
			res.send(err);
		}

		res.send({message:"task was saved", data:task});
	});
};

exports.updateTask = function (req, res) {
	Task.update({_id:req.params.taskId}, {
		taskTitle: req.body.taskTitle,
		taskDescription: req.body.taskDescription,
		taskStartDate: req.body.taskStartDate,
		taskEndDate: req.body.taskEndDate
	}, function (err, num, raw) {
		if (err) {
			req.send(err);
		}

		res.json(num);
	});
};

exports.deleteTask = function (req, res) {

	Task.remove({_id:req.params.taskId}, function (err) {
		if (err) {
			res.send(err);
		}

		res.json({message: "The task was deleted"});
	})
};