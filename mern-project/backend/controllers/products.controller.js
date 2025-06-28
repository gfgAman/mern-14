const Products = require('../models/product.schema.js')

const productController = async (req, res) => {
    const products = await Products.find()

    if (!products)
        return res.status(404).json({ message: 'Products not Found!!', status: 404, success: false })

    return res.status(200).json({ message: 'Products found', status: 200, success: true, products })
}

module.exports = productController