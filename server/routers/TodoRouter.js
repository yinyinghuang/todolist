const router=require('koa-router')();
const path = require('path');
const Todo = require('../controllers/TodoController.js');

router.post('/create',Todo.create);
router.get('/retrieve/:userId',Todo.retrieve);
router.post('/update',Todo.update);
router.post('/delete',Todo.delete);
router.get('/',Todo.retrieve);

module.exports = router;