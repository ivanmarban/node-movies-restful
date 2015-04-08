var mongoose = require('mongoose');

var MovieSchema = new mongoose.Schema({
	title : { type : String },
	year : { type : String },
	rated : { type : String },
	runtime : { type : String},
	genre : { type : String},
	director : { type : String }
});

MovieSchema.set('toJSON', {
	transform: function (doc, ret, options) {
		ret.id = ret._id;
		delete ret._id;
	}
});

module.exports = mongoose.model('Movie', MovieSchema);