var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	title : { type : String },
	year : { type : String },
	rated : { type : String },
	runtime : { type : String},
	genre : { type : String},
	director : { type : String }
});

module.exports = mongoose.model('Movie', MovieSchema);