const { Router } = require('express')

const { createCart, getListOfCart, createuserCart } = require ('./controllers')

const routes = Router()

routes.post('/cart',createCart)

routes.get('/cart', getListofCart)

routes.post('/cart/user-cart', createUserCart)

module.exports = routes 
