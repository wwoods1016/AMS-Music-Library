const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const musicRoutes = express.Router();
const PORT = 4000;

let Music = require('./music.model');

app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/music', { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once('open', function() {
	console.log('MongoDB database connection established successfully');
});

musicRoutes.route('/').get(function(req, res) {
	Music.find(function(err, pieces) {
		if (err) {
			console.log(err);
		} else {
			res.json(pieces);
		}
	});
});

musicRoutes.route('/:id').get(function(req, res) {
	let id = req.params.id;
	Music.findById(id, function(err, music) {
		res.json(music);
	});
});

musicRoutes.route('/update/:id').post(function(req, res) {
	Music.findById(req.params.id, function(err, music) {
		if (!music) res.status(404).send('data is not found');
		else music.music_description = req.body.music_description;
		music.music_composer = req.body.music_composer;
		music.music_class = req.body.music_class;
		music.music_title = req.body.music_title;

		music
			.save()
			.then(music => {
				res.json('Music updated!');
			})
			.catch(err => {
				res.status(400).send('Update not possible');
			});
	});
});

musicRoutes.route('/add').post(function(req, res) {
	let music = new Music(req.body);
	music
		.save()
		.then(music => {
			res.status(200).json({ music: 'New music added successfully' });
		})
		.catch(err => {
			res.status(400).send('Adding new music failed');
		});
});

musicRoutes.route('/delete/:id').delete(function(req, res) {
	let id = req.params.id;
	Music.findByIdAndRemove(id).exec();
	res.redirect('/');
});

app.use('/pieces', musicRoutes);

app.listen(PORT, function() {
	console.log('Server is running on Port: ' + PORT);
});
