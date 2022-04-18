const express = require("express");
const validator  = require("../middleware/ListValidator")
const router = express.Router();

const ListController = require("../controller/ListController");

router.get("/lists", ListController.getLists);
router.post("/create-list", validator.createList(), ListController.createList);
router.put("/update-list/:id", ListController.updateList);
router.get("/activate/:id", ListController.activateList);
router.delete("/delete-list/:id", ListController.deleteList);

module.exports = router;
