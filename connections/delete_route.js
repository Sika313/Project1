var bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const user = require('../models/user');
const fs = require('fs');

var urlencodedParser = bodyParser.urlencoded({ extended: false });

module.exports = function(app){
    app.get('/delete_user', function(req, res){
        res.render('delete_user');
    })

    app.post('/delete_user', urlencodedParser, function(req, res){
        mongoose.connect('mongodb://localhost:27017/project1', {useNewUrlParser: true, useUnifiedTopology: true});

        mongoose.connection.once('open', function(){
            console.log('...CONNECTION TO DATABASE SUCCESSFUL...');
        }).on('error', function(error){
            console.log(`AN ERROR OCCURED ${error}`)
        });

        var result = {
            fname: req.body.fname_d,
            lname: req.body.lname_d,
            age: req.body.age_d
        }
        user.findOne(result).then(function(record){
          fs.unlink(`public/uploads/${record.img_path}`, function(err){
            if(err){
              console.log(err);
            } else{
              console.log('User image deleted.');
            }
          })

          user.deleteOne(record).then(function(){

              res.render('delete_user_success', {data: req.body});
          })
      })

  })



}
