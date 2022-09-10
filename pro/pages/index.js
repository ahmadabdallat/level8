const express = require('express')
const mangoose = require('mongoose')
const routes = require ('./routes/score')
const cors = require('cors');
​
const app = express();
//use cors 
app.use(cors())
const port = 4000;
const dbURL = 'mongodb+srv://ahmadabdallat:tnt435@cluster0.k3ckzwl.mongodb.net/?retryWrites=true&w=majority'
​
//connecting to the mongo cloud db through the mongoose package 
mangoose.connect(dbURL).then(() => {
    console.log("connected to the cloud")
}).catch((error) => { console.log(error) })
​
//starting the server at the port of your choice 
app.listen(process.env.PORT || port, () => {
    console.log("app is listening at port", port)
})
​
​