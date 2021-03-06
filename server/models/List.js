const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ListSchema = new Schema({
	text: {
		type: String,
		required: [true, "Enter text !"],
	},
	editing: {
		type: Boolean,
		default: false,
	},
});

const List = mongoose.model("list", ListSchema);

module.exports = List;
