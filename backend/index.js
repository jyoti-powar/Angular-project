const express = require('express')
const app = express()
const mongoose = require('mongoose')

const bodyparser = require('body-parser')
const jsonparser = bodyparser.json()


const cors = require('cors')
app.use(cors())

mongoose.connect('mongodb+srv://jyoti:1234@cluster0.abbyjyt.mongodb.net/Shopping?retryWrites=true&w=majority', {

    useNewUrlParser: true,
    useUnifiedTopology: true

}).then(
    () => { console.log('Database Connected') }
)

const pd = require("./model/info.js")

app.get('/mens_products', (req, res) => {
   pd.find({}).then((data) => {
        res.json(data);
    })
})


app.post('/saveproducts', jsonparser, (req,res) => {

    const pr = new pd({
        _id: new mongoose.Types.ObjectId(),
        id:req.body.id,
        category: req.body.category,
        size: req.body.size,
        color: req.body.color,
        price:req.body.price
    })
   


    pr.save().then(
        (msg) => { res.json(msg) }
    )
})



//to update api

app.put('/updateproduct/:id',jsonparser,(req,res)=>{

    pd.updateOne({_id:req.params.id},
        {
            $set:{
               id:req.body.id,
               category:req.body.category,
               size:req.body.size,
               color:req.body.color,
               price:req.body.price


            }
        }).then(
            (info)=>{
                console.log(info); res.json(info)
            }
        )
})

app.delete('/deletepro/:id',(req,res)=>{
    pd.deleteOne({_id:req.params.id}).then((info)=>{res.json(info)}).catch(
        (err)=>{console.log(err)}
    )
})



app.listen(3218, () => { console.log('server running on 3218') })

