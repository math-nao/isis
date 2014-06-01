var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('number', function() {

        it('should work with a number type (integer)', function(done) {
            is(1, 'number').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (float)', function(done) {
            is(1.234, 'number').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'number').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'number').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'number').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'number').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'number').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'number').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'number').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'number').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
