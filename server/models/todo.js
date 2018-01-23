const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId=Schema.Types.ObjectId;

const TodoSchema = new Schema({
	task:{
		type:String,
		require:true
	},
	class:{
		type:String
	},
	priority:{
		type:Number
	},
	created:{
		type:Date,
		require:true
	},
	modifid:{
		type:Date,
		require:true
	},
	userId:{
		type:ObjectId,
		ref:'User'
	}
});

const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;