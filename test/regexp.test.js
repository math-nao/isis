var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('regexp', function() {

        it('should fail with a number type', function(done) {
            is(1, 'regexp').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'regexp').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'regexp').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'regexp').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'regexp').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a regexp type', function(done) {
            is(new RegExp(''), 'regexp').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'regexp').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'regexp').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'regexp').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
