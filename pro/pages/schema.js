const mangoose = require('mongoose')

const ScoreSchema =new mangoose.Schema({
    name:{type:String,requied:true}
    ,score:{type:Number,requied:true}
})

module.exports = mangoose.module('score' , ScoreSchema)