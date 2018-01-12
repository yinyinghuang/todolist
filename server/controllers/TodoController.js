const Todo = require('../models/Todo');
module.exports = {
	async create(ctx) {
		const {task,deadline,category,priority,userId} = ctx.request.body;

		await Todo.create({task,deadline,category,priority,userId},(err) => {
			ctx.body = err ? 
				{success :false,msg:err}
				:
				{success:true}
		});
	},
	async retrieve(ctx) {
		const {_id,userId} = ctx.request.body;
		_id ?
			await Todo.findById(_id,(err,todo) => {
				ctx.body = err ? 
					{success :false,msg:err}
					:
					{success:true,todo:todo}
			})
			:
			await Todo.find({userId},(err,todo) => {
				ctx.body = err ? 
					{success :false,msg:err}
					:
					{success:true,todo:todo}
			});
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
	},

};