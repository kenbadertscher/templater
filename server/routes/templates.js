const router = require('express').Router();
let Exercise = require('../models/template.model');

router.route('/').get((req, res) => {
    Template.find()
        .then(templates => res.json(templates))
        .catch(err => res.status(400).json('Error" ' + err));
});

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newTemplate = new Template({
        username,
        description,
        duration,
        date,
    });

    newTemplate.save()
    .then(() => res.json('Template added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});