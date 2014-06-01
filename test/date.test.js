var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('date', function() {

        it('should fail with a number type', function(done) {
            is(1, 'date').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'date').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'date').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'date').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'date').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'date').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'date').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a date type', function(done) {
            is(new Date(), 'date').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'date').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
