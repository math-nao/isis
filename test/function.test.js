var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('function', function() {

        it('should fail with a number type', function(done) {
            is(1, 'function').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'function').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an array type', function(done) {
            is([], 'function').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an object type', function(done) {
            is({}, 'function').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'function').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'function').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'function').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'function').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'function').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
