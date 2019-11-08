const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
	products: [{
		type: Schema.Types.ObjectId,
		ref: "product"
	}],
	name: {
		type: String,
		required: true
	}
});

module.exports = mongoose.model("category", CategorySchema);