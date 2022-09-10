var express =require('express')
var app = express();
var mangoose = require('mongoose');
mangoose.connect('mongodb+srv://ahmadabdallat:tnt435@cluster0.k3ckzwl.mongodb.net/?retryWrites=true&w=majority')

var mySchema = mangoose.model('mySchema' ,{username:String, password:String});

app.get('' ,(req,res) =>{
    var ahmad =new mySchema ({username: "ahmadabdallat", password:"tnt435"});
    ahmad.save().then(mySchema => {
        res.send('a new acc with username ${mySchema.username} is created');

    })
})

app.listen(3000,() => {
    console.log("server is running on port 3000");
});