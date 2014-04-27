var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('hexa', function() {

        it('should work with a string type (hexa uppercase)', function(done) {
            is('0123456789ABCDEF', 'hexa').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a string type (hexa lowercase)', function(done) {
            is('0123456789abcdef', 'hexa').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a string type (non hexa)', function(done) {
            is('0123456789abcdefg', 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a number type (positive integer)', function(done) {
            is(1234567890, 'hexa').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (negative integer)', function(done) {
            is(-1234567890, 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type (positive float)', function(done) {
            is(1.234567890, 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type (negative float)', function(done) {
            is(-1.234567890, 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'hexa').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
