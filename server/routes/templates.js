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

router.route('/:id').get((req, res) => {
    Template.findById(req.params.id)
        .then(template => res.json(template))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/:id').delete((req, res) => {
    Template.findByIdAndDelete(req.params.id)
        .then(() => res.json('Template deleted.'))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/update/:id').post((req, res) => {
    Template.findById(req.params.id)
        .then(template => {
            template.username = req.body.username;
            template.description = req.body.description;
            template.duration = Number(req.body.duration);
            template.date = Date.parse(req.body.date);

            template.save()
                .then(() => res.json('Template updated!'))
                .catch(err => res.status(400).json('Error: ' + err));
        })
        .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router;