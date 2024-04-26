const express = require("express");
const { postData, getData } = require("../controllers/DataController");

const router = express.Router();

router.post("/data", postData);
router.get("/getData", getData);

module.exports = router;
