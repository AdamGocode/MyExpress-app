const router = require("express").Router();


router.get('/', getHomePage);

router.get('/login', getLoginPage);
router.get('/register', getRegisterPage);
router.get('/product', getProductPage);


module.exports = router;

