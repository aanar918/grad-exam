const List = require("../models/List");
const { validationResult } = require("express-validator");

const getLists = async (req, res, next) => {
	List.find({}, function (err, data) {
		if (err) {
			res.json({
				success: true,
				message: err,
			});
		} else {
			res.json({
				success: true,
				data: data,
			});
		}
	});
};

const createList = (req, res, next) => {
	const data = req.body;
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		return res.status(400).json({
			success: false,
			errors: errors.array(),
		});
	} else {
		List.insertMany(data)
			.then(() => {
				return res.status(200).json({
					success: true,
					data: data._id,
				});
			})
			.catch((error) => {
				console.log(error);
				next();
			});
	}
};

const updateList = (req, res, next) => {
	const data = req.body;
	const id = req.params.id;

	List.updateOne({ _id: id }, data, (err, data) => {
		if (err) {
			res.json({
				success: false,
				message: err,
			});
		} else {
			res.json({
				success: true,
				data: data,
			});
		}
	});
};

const deleteList = (req, res, next) => {
	const id = req.params.id;
	List.findOneAndDelete({ _id: id })
		.then((data) => res.json(data))
		.catch((err) =>
			res.json({
				success: false,
				message: err,
			})
		);
};

module.exports = {
	getLists,
	updateList,
	deleteList,
	createList,
};
