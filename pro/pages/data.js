const dbURL ='mongodb+srv://ahmadabdallat:tnt435@cluster0.k3ckzwl.mongodb.net/?retryWrites=true&w=majority'
const mangoose = require('mongoose')

mangoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}) .catch((error) =>{console.log(error)})

const mangoose = require('mongoose')

const mySchema =new mangoose.Schema({
    username:{type:String,requied:true}
    ,password :{type:String,requied:true}
})

module.exports = mangoose.module('score' , mySchema)