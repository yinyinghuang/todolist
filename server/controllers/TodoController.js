const Todo = require('../models/Todo');
const ObjectId = require('mongoose').Types.ObjectId;


module.exports = {
	async create(ctx,next) {
		const {task,userId} = ctx.request.body;

		const todoEntity = new Todo({task,userId});	next();  
		await todoEntity
			.save()
			.then((todo) => {
				ctx.body = todo ? 
					{success :true,msg:{
						success:true,
						header:'The item has been saved'
					}}
					:
					{success:false,msg:{
						error:true,
						header:'failed'
					}}
			})
			.catch(err => ({success :false,msg:err}));
		
	},
	async retrieve(ctx) {
		const {userId} = ctx.params;

			await Todo.findByUserId(userId,(err,todo) => {
				ctx.body = err ? 
					{success :false,msg:err}
					:
					{success:true,todo:todo}
			})
	},
	async update(ctx) {
		const {_id,task,deadline,category,priority,userId} = ctx.request.body;

		await Todo.update({_id},{task,deadline,category,priority,userId},(err) => {
			ctx.body = err ? 
				{success :false,msg:err}
				:
				{success:true}
		});
	},
	async delete(ctx) {
		const {_id} = ctx.request.body;

		await Todo.remove({_id},(err) => {
			ctx.body = err ? 
				{success :false,msg:err}
				:
				{success:true}
		});
	}
};