const Basket = require('../models/basket');

function indexRoute(req, res, next) {
  Basket
    .find()
    .then(baskets => {
      res.json(baskets);
    })
    .catch(next);
}


function showRoute(req, res, next) {
  Basket
    .findById(req.params.id)
    .then(basket =>  res.json(basket))
    .catch(next);
}


function createRoute(req, res, next) {
  Basket
    .create(req.body)
    .then(basket => {
      res.status(201).json(basket);
    })
    .catch(next);
}


function updateRoute(req, res, next) {
  Basket
    .findById(req.params.id)
    .then(basket => {
      basket.set(req.body);
      return basket.save();
    })
    .then(basket => res.json(basket))
    .catch(next);
}


function deleteRoute(req, res, next) {
  Basket
    .findById(req.params.id)
    .then(basket =>  basket.remove())
    .then(() => res.sendStatus(204))
    .catch(next);
}




module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
