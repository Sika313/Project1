var bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const user = require('../models/user');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    
    app.get('/', function(req, res){
        res.render('person');
    })

    app.post('/', urlencodedParser, function(req, res){
        mongoose.connect('mongodb://localhost:27017/project1', {useNewUrlParser: true, useUnifiedTopology: true});

        mongoose.connection.once('open', function(){
            console.log('...CONNECTION TO DATABASE SUCCESSFUL...');
        }).on('error', function(error){
            console.log(`AN ERROR OCCURED ${error}`)
        });
        var ind_user = new user({
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age
        })
        ind_user.save().then(function(){
            res.render('person_success', {data: req.body});
        })
        
    })

    app.get('/view_users', function(req, res){
        mongoose.connect('mongodb://localhost:27017/project1', {useNewUrlParser: true, useUnifiedTopology: true});

        mongoose.connection.once('open', function(){
            console.log('...CONNECTION TO DATABASE SUCCESSFUL...');
        }).on('error', function(error){
            console.log(`AN ERROR OCCURED ${error}`)
        });
        user.find().then(function(records){
            res.render('view_users', {data: records})
        })
    })


}