const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const templateSchema = new Schema({
    username: { type: String },
    description: { type: String, required: true },
    duration: { type: Number, required: true },
    date: { type: Date, required: true },
}, {
    timestamps: true,
});

 const Template = mongoose.model('Template', templateSchema);

 module.exports = Template;