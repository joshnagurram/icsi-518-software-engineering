const mongoose = require('mongoose');

const cartSchema = new mongoose.Schema({
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' } // Ensure you have this reference
});
module.exports = mongoose.model('Cart', cartSchema);
