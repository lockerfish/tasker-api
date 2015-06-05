var mongoose = require("mongoose");

var Task = mongoose.Schema({
	taskTitle: {
		type=String,
		default="",
		required=true
	},
	taskDescription: {
		type:String,
		default="",
		required=true
	},
	taskStartDate: {
		type:Date,
		required=true
	},
	taskEndDate: {
		type:Date,
		required=true
	},
	userId: {
		type:Number,
		required=true
	}
});

module.exports = mongoose.model("Task", Task);