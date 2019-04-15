const router = require('express').Router();
const bookRepository = require("./bookRepository");
const bookService = require('./bookService');
const controller = require('./bookController')({bookRepository, bookService});



router.post("/", controller.createOrUpdate);
router.get("/:isbn", controller.details);
router.delete("/:isbn", controller.remove);

module.exports = router;