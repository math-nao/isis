var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('object', function() {

        it('should fail with a number type', function(done) {
            is(1, 'object').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'object').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'object').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an object type', function(done) {
            is({}, 'object').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'object').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'object').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'object').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'object').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'object').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
