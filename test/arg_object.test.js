var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('arg_object', function() {

        it('should work with an argument object type', function(done) {
            is(arguments, 'arg_object').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type', function(done) {
            is(1, 'arg_object').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'arg_object').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'arg_object').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'arg_object').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'arg_object').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'arg_object').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'arg_object').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'arg_object').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'arg_object').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
