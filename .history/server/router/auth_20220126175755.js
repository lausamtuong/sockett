const { login } = require("../controllers/authController")

const router = require("express").Router()

router.post('/login',login)
router.post('/sign',sign)

module.exports = router