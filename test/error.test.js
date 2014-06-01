var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('error', function() {

        it('should work with an error type', function(done) {
            is(new Error(), 'error').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with an error type', function(done) {
            is(new TypeError(), 'error').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with an error type', function(done) {
            is({ name: 'Error', message: 'an error occurred' }, 'error').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type', function(done) {
            is(1, 'error').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'error').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'error').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'error').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'error').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'error').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'error').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'error').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'error').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
