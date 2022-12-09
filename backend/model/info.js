const mongoose = require('mongoose')

const pdSchema = new mongoose.Schema(
    {
        _id:mongoose.Schema.Types.ObjectId,
        id:Number,
        category:String,
        size: String,
        color: String,
        price:Number

    }
)


module.exports = mongoose.model('mens_products',pdSchema)