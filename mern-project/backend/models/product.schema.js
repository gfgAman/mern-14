const mongoose = require('mongoose')
const productSchema = mongoose.Schema({}, { strict: false, collections: 'Product' })

const Products = mongoose.model('Products', productSchema)

module.exports = Products