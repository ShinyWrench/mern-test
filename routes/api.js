const express = require ('express');
const router = express.Router();
const TodoApp = require('../models/todo');

router.get('/todos', (req, res, next) => {
    Todo.find({}, 'action')
        .then(data => res.json(data))
        .catch(next);
});

router.post('/todos', (req, res, next) => {
    if(req.body.action) {
        Todo.create(req.body)
            .then(data => res.json(data))
            .catch(next);
    } else {
        res.json({
            error: "Input field is empty, please enter something"
        });
    }
});

router.delete('/todos/:id', (req, res, next) => {
    Todo.findOneAndDelete({"_id": req.params.id})
        .then(data => res.json(data))
        .catch(next);
});

module.exports = router;
