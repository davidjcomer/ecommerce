const router = require('express').Router();
const basketController = require('../controllers/basketController');
const authController = require('../controllers/authController');
const ordersController = require('../controllers/ordersController');
const secureRoute = require('../lib/secureRoute');
const adminRoute = require('../lib/adminRoute');
const stockController = require('../controllers/stockController');


router.route('/baskets')
  .get( basketController.index)
  .post(adminRoute, basketController.create);

router.route('/baskets/:id')
  .get(basketController.show)
  .put(adminRoute, basketController.update)
  .delete(adminRoute, basketController.delete);


router.post('/register', authController.register);
router.post('/login', authController.login);

router.post('/checkout', secureRoute, ordersController.createorder);
router.get('/orders', secureRoute, ordersController.indexorder);
router.get('/allorders', adminRoute, ordersController.allorder);
router.get('/stock/:id', stockController.stockIndex);


module.exports = router;
