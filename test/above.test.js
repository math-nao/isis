var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('above', function() {

        it('should work with a number type (integer)', function(done) {
            is(2, 'above(1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (integer) equal', function(done) {
            is(1, 'above(1)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type (integer) below', function(done) {
            is(0, 'above(1)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a number type (float)', function(done) {
            is(1.2, 'above(1.1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (float) equal', function(done) {
            is(1.1, 'above(1.1)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type (float) below', function(done) {
            is(1.01, 'above(1.1)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'above(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'above(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'above(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'above(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'above(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'above(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'above(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'above(0)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
