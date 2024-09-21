const products = require('./data')

class ProductApi {
    getAll(req, res) {
        try {
            const productInfo = products.map(product => ({
                id: product.id,
                title: product.title,
                icon : product.icon
            }));
            res.json(productInfo);
        } catch (error) {
            res.status(404).json({ "message": "Data not found" })
        }
    }
    getById(req,res){
        try {
            const { id } = req.params;
            const product = products.find(item => item.id === id); 
            if (!product) {
                return res.status(404).json({ message: "Product not found" }); 
            }
            res.status(200).json(product); 
        } catch (error) {
            console.error(error);
            res.status(500).json({ message: "Server error" }); 
        }
    }
}
module.exports = new ProductApi()