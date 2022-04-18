const { body } = require("express-validator");

const createList = () => {
	return [body("text").not().isEmpty()];
};

module.exports = { createList };
