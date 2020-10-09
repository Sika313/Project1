const mongoose = require ('mongoose');
const multer = require('multer');
const user = require('../models/user');



module.exports = function(app){

  const storage = multer.diskStorage({
    destination: './public/uploads/',
    filename: function(req, file, cb){
      cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
  })
  const upload = multer({
    storage: storage
  })


  app.post('/person_success', upload.single('user_img'), function(req, res){
  /* mongoose.connect('mongodb://localhost:27017/project1', {useNewUrlParser: true, useUnifiedTopology: true});

    mongoose.connection.once('open', function(){
        console.log('...CONNECTION TO DATABASE SUCCESSFUL...');
    }).on('error', function(error){
        console.log(`AN ERROR OCCURED ${error}`)
    });

    user.findOneAndUpdate({fname: Mashekwa}, {img_path: req.file.filename}).then(function(){
      res.send('IT WORKS');
    })*/
    res.send('IT WORKS.');
  })

}
