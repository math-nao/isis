var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('arguments', function() {

        it('should work with an argument object type', function(done) {
            is(arguments, 'arguments').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type', function(done) {
            is(1, 'arguments').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'arguments').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'arguments').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'arguments').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'arguments').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'arguments').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'arguments').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'arguments').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'arguments').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
