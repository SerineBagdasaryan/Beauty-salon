const express = require('express');
const router = express.Router();
const controller = require('../controllers/HomeController');
router.get('/menu', controller.getMenu);
router.get('/getHomeData', controller.getHomeData);
router.get('/footerData', controller.footerData);
router.get('/logout', controller.logout);



module.exports = router;