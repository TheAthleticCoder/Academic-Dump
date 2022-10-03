const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Create Schema
const VendorSchema = new Schema({
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
	contact_number:{
		type: String,
		required: true,
	},
	shop_name:{
		type: String,
        unique: true,
	},
    opening_time:{
		type: String,
        unique: true,
	},
    closing_time:{
		type: String,
        unique: true,
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Vendor = mongoose.model("Vendors", VendorSchema);
