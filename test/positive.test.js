var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('positive', function() {

        it('should work with a number type (positive integer)', function(done) {
            is(1, 'positive').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (positive float)', function(done) {
            is(1.234, 'positive').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (0 value)', function(done) {
            is(0, 'positive').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type (negative integer)', function(done) {
            is(-1, 'positive').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type (negative float)', function(done) {
            is(-1.234, 'positive').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'positive').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'positive').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'positive').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'positive').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'positive').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'positive').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'positive').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'positive').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
