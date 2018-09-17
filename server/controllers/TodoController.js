let res = require('./ResultFormat');
const Todo = require('../models/Todo');
const ObjectId = require('mongoose').Types.ObjectId;


module.exports = {
    async create(ctx, next) {
        const { task} = ctx.request.body;
        const userId = ctx.user;
        const todoEntity = new Todo({ task, userId });
        
        await todoEntity
            .save()
            .then((todo) => {
                ctx.body = todo ? {
                    success: true,
                    msg: {
                        success: true,
                        header: '添加成功'
                    }
                } : {
                    success: false,
                    msg: {
                        error: true,
                        header: '添加失败'
                    }
                }
            })
            .catch(err => ({ success: false, msg: err }));

    },
    async retrieve(ctx) {
        const userId = ctx.user._id;

        await Todo.findByUserId(userId, (err, todo) => {
            ctx.body = err ? { success: false, msg: err } : { success: true, todo: todo }
        })
    },
    async update(ctx) {
        const { _id, task, deadline, category, priority, userId } = ctx.request.body;

        await Todo.update({ _id }, { task, deadline, category, priority, userId }, (err) => {
            ctx.body = err ? { success: false, msg: err } : { success: true }
        });
    },
    async delete(ctx) {
        const { _id } = ctx.request.body;

        await Todo.remove({ _id }, (err) => {
            ctx.body = err ? { success: false, msg: err } : { success: true }
        });
    }
};