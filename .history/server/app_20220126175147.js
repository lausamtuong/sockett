const app = require("express")()
const cors = require("cors")
const PORT = process.env.PORT || 8000;
require('dotenv').config()
app.use(cors())
app.use(express.json())
app.use(express.urlen)

