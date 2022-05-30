
const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const cartSchema = new Schema(
    {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users',
            required: true,
        },
        listProduct : {
            type: Array,
            default: []
        },
    },
    {
        timestamps: true,
    }
);

const Cart = mongoose.models.carts || mongoose.model('carts', cartSchema);
module.exports = Cart;

