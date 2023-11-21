import generateToken from "../controller/middleware/checkIs";



const express = require('express');
const router = express.Router();


// Define routes
router.post('/generate-token', generateToken);



module.exports = router;