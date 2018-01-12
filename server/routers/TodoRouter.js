const router=require('koa-router')();
const path = require('path');
const Todo = require('../controllers/TodoController.js');

router.post('todo/create',Todo.create);
router.post('todo/retrieve',Todo.retrieve);
router.post('todo/update',Todo.update);
router.post('todo/delete',Todo.delete);
router.get('todo/',Todo.retrieve);

module.exports = router;