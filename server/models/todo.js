const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId=Schema.Types.ObjectId;

const TodoSchema = new Schema({
	task:{
		type:String,
		require:true
	},
	cate:{
		type:String,
		default:undefined
	},
	priority:{
		type:Number,
		default:0
	},
	created:{
		type:Date,
		default:Date.now()
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

TodoSchema.static('findByUserId', function(id,cb){
	return this.where({userId:new mongoose.Types.ObjectId(id)}).exec(cb);
})

const Todo = mongoose.model('Todo', TodoSchema);
module.exports = Todo;