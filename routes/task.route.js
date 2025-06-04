const { Router } = require('express');
const { getTasks, postTask, updateTask, deleteTask } = require('../controllers/task.controller');

const router = Router();

router.get('/', getTasks)
router.post('/', postTask)
router.put('/:id', updateTask)
router.delete('/:id', deleteTask)

module.exports = router
