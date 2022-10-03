const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const BuyerSchema = new Schema({
	name: {
		type: String,
		required: [true, "Please Enter Your Name"],
		maxLength: [30, "Name cannot exceed 30 characters"],
		minLength: [2, "Name should have more than 2 characters"],
	},
	password: { type: String, required: true },
	email: {
		type: String,
		required: [true, "Please Enter Your Email"],
		unique: true,
		// validate: [validator.isEmail, "Please Enter a valid Email"],
	},
	contact_number: {
		type: String,
		required: true
	},
	age: {
		type: String,
        required: true
	},
	batch_name: {
		type: String,
        required: true
	},
	date: {
		type: Date,
		default: Date.now
	},
    wallet: {
        type: Number,
        default: 0, 
    }
	// wallet:{
	// 	type: Number,
	// 	required: true,
	// }
});

module.exports = Buyer = mongoose.model("Buyers", BuyerSchema);
