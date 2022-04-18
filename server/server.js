const dotenv = require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const apis = require("./routes/api");
const connection = require("./database");
const port = process.env.PORT;

app.use(express.json());
app.use(express.static("public"));
app.use(cors());

app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);

app.use("*", function requestHandler(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header(
		"Access-Control-Allow-Headers",
		"Origin, X-Requested-With, Content-Type, Accept"
	);
	res.header("Content-Type", "application/json");
	next();
});

app.use("/api", apis);

app.all("*", (req, res, next) => {
	res.status(404).json({
		success: false,
		message: `Can't find ${req.originalUrl} on this server !`,
	});
});

app.listen(port, () => {
	console.log(`Server online at http://localhost:${port}`);
});
