const router = require('express').Router();
const controller = require('./bookController');

router.post("/", controller.createOrUpdate);
router.get("/:isbn", controller.details);
router.delete("/:isbn", controller.remove);

module.exports = router;