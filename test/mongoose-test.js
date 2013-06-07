var should = require('should')
var testSuite = require('userific-test')
var UserificMongoose = require('../')
var mongoose = require('mongoose')
describe('Userific Mongoose Backend', function() {
  before(function(done) {
    var connStr = 'mongodb://localhost:27017/mongoose-bcrypt-test';
    mongoose.connect(connStr, function(err) {
      should.not.exist(err, 'error connecting to mongodb console')
      console.log('Successfully connected to MongoDB')
      done()
    });
  })
  var backend = new UserificMongoose()
  testSuite(backend)
})