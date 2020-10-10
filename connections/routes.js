var bodyParser = require('body-parser');
const mongoose = require ('mongoose');
const user = require('../models/user');
const multer = require('multer');
const path = require('path');

var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = function(app){
  const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  });
  const upload = multer({
    storage: storage
  })

    app.get('/', function(req, res){
        res.render('person');
    })

    app.post('/', urlencodedParser, upload.single('user_img'), function(req, res){
        mongoose.connect('mongodb://localhost:27017/project1', {useNewUrlParser: true, useUnifiedTopology: true});

        mongoose.connection.once('open', function(){
            console.log('...CONNECTION TO DATABASE SUCCESSFUL...');
        }).on('error', function(error){
            console.log(`AN ERROR OCCURED ${error}`)
        });
        var ind_user = new user({
            fname: req.body.fname,
            lname: req.body.lname,
            age: req.body.age,
            img_path: req.file.filename
        })
        ind_user.save();
          res.render('person_success', {data: req.body});

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
