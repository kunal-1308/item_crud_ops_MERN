const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema({
	title: {
		type: String,
		required: true,
	},
	quantity: {
		type: String,
		required: true,
	},
	// image: {
	// 	type: File,
	// },
	description: {
		type: String,
	},
	published_date: {
		type: Date,
	},
	price: {
		type: String,
	},
	updated_date: {
		type: Date,
		default: Date.now,
	},
});

module.exports = Item = mongoose.model("item", ItemSchema);
