const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const menuSchema = Schema({
    name: {
        type: String, 
        required: true
    },
    recipes: [{
        type: Schema.Types.ObjectId,
        ref:'Recipe'
    }],
})

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;