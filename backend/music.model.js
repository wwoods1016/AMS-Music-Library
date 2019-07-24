const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Music = new Schema({
	music_description: {
		type: String
	},
	music_composer: {
		type: String
    },
    music_title: {
        type: String
    },
	music_class: {
		type: String
	}
});

module.exports = mongoose.model('Music', Music);
