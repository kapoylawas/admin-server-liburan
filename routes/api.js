const router = require('express').Router();
const apiController = require('../controllers/apiController');
const {uploadSingle} = require('../middlewares/multer');

router.get('/landing-page', apiController.landingPage);
router.get('/detail-page/:id', apiController.detailPage);
router.get('/master-category', apiController.getCategory);
router.get('/master-bank', apiController.getBank);
router.post('/booking-page', uploadSingle, apiController.bookingPage);


module.exports = router;