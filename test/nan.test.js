var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('NaN', function() {

        it('should fail with a number type', function(done) {
            is(1, 'NaN').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'NaN').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'NaN').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'NaN').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'NaN').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'NaN').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'NaN').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'NaN').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a NaN type', function(done) {
            is(0 / 0, 'NaN').should.be.a.Boolean.and.be.true;
            done();
        });

    });
});
