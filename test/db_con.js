const mongoose = require ('mongoose');

before(function(done){
    mongoose.connect('mongodb://localhost:27017/project1', {useNewUrlParser: true, useUnifiedTopology: true});

    mongoose.connection.once('open', function(){
        console.log('...CONNECTION TO DATABASE SUCCESSFUL...');
        done();
    }).on('error', function(error){
        console.log(`AN ERROR OCCURED ${error}`)
    });

})