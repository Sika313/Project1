const mongoose = require('mongoose');
const assert = require('assert');
const user = require('../models/user');

describe('Deleting Records', function(){
    it('Deletes a record(s) from the collection', function(done){
        var result ={};
        user.deleteMany(result).then(function(){
            user.findOne({fname: 'Babra'}).then(function(record){
                assert(record.fname === null);
                done();
            })
        })
    })
})