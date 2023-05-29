const mongoose = require("mongoose");
const config = require("config");
const db = config.has("mongoURI")
	? config.get("mongoURI")
	: "mongodb+srv://sanketrp:san123@devconnector.adi20.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);

const connectDB = async () => {
	try {
		await mongoose.connect(db, {
			useNewUrlParser: true,
		});
		// Async await used
		console.log("MongoDB Connected...");
	} catch (err) {
		console.error(err.message);
		// Exit process with failure
		process.exit(1);
	}
};

module.exports = connectDB;
