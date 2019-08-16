const express = require('express')

const shopsApi = require('../models/shop.js')

const shopRouter = express.Router()


shopRouter.get('/', function(req,res) {
  const allShops = shopsApi.getShops()
  res.render('allShops', {allShops});
})

shopRouter.get('/new', function(req, res) {
  res.send(shopsApi.createShop());
})

shopRouter.get('/createShop', (req, res) => {
  res.render('createShop', {})
})

shopRouter.get('/:index', function(req,res){
  const singleShop = shopsApi.getShop(req.params.index)
  res.render('editShop', {singleShop, index: req.params.index})
})

shopRouter.post('/', (req,res) => {
  shopsApi.addShop(req.body);
  res.send(200);
})

shopRouter.put('/:index', function(req,res){
  shopsApi.updateShop(req.params.index, req.body);
  res.send(200);
})

shopRouter.delete('/:index', function(req,res){
  shopsApi.deleteShop(req.params.index)
  res.send(200);
})


/* Step 6
 *
 * Export the router from the file.
 *
 */
module.exports = {
  shopRouter
}
