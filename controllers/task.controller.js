const taskModel = require('../models/models.task')

async function postTask(req, res) {
    const { name } = req.body
    if (!name) {
        return res.status(400).send({ error: 'Task name is required' })
    }

    try {
        const result = await taskModel.insertOne({
            ...req.body
        })

        res.status(200).send(result)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to create task' })
    }
}

async function getTasks(req, res) {
    try {
        const result = await taskModel.find()
        res.status(200).send(result)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to get tasks' })
    }
}

async function deleteTask(req, res) {
    const { id } = req.params
    try {
        const result = await taskModel.deleteOne({
            id: id
        })

        if (!result) return res.status(404).send({ error: 'Not found' })
        res.status(200).send(result)
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to delete task' })
    }

}

async function updateTask(req, res) {
    const { id } = req.params
    try {
        const result = await taskModel.findOneAndUpdate({
            id: id
        }, {
            ...req.body
        })

        if (!result) return res.status(404).send({ error: 'Not found' })
        res.status(200).send('task has been update')
    } catch (error) {
        console.error(error)
        res.status(500).send({ error: 'Failed to update task' })
    }
}

module.exports = {
    getTasks,
    postTask,
    updateTask,
    deleteTask
}