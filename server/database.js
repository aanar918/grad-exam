const mongoose = require("mongoose");

mongoose
	.connect(process.env.ATLAS_CONNECTION_URL, { useNewUrlParser: true })
	.then(() => console.log(`Database connection succesfull`))
	.catch((e) => console.log(e.message));
mongoose.Promise = global.Promise;
