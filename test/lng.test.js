var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('lng', function() {

        it('should work with a number type (positive integer)', function(done) {
            is(122, 'lng').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (negative integer)', function(done) {
            is(-122, 'lng').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (positive float)', function(done) {
            is(122.1430195, 'lng').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (negative float)', function(done) {
            is(-122.1430195, 'lng').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (> 180)', function(done) {
            is(180.01, 'lng').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type (< -180)', function(done) {
            is(-180.01, 'lng').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type (> 0)', function(done) {
            is('100.123', 'lng').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (< 0)', function(done) {
            is('-100.123', 'lng').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (empty)', function(done) {
            is('', 'lng').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'lng').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'lng').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'lng').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'lng').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'lng').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'lng').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'lng').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
