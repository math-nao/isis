var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('lat', function() {

        it('should work with a number type (positive integer)', function(done) {
            is(37, 'lat').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (negative integer)', function(done) {
            is(-37, 'lat').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (positive float)', function(done) {
            is(37.4418834, 'lat').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (negative float)', function(done) {
            is(-37.4418834, 'lat').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (> 90)', function(done) {
            is(90.01, 'lat').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type (< -90)', function(done) {
            is(-90.01, 'lat').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type (> 0)', function(done) {
            is('50.123', 'lat').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (< 0)', function(done) {
            is('-50.123', 'lat').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (empty)', function(done) {
            is('', 'lat').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'lat').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'lat').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'lat').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'lat').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'lat').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'lat').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'lat').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
