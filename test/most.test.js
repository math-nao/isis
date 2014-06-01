var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('most', function() {

        it('should work with a number type (integer)', function(done) {
            is(0, 'most(1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (integer) equal', function(done) {
            is(1, 'most(1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (integer) above', function(done) {
            is(2, 'most(1)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a number type (float)', function(done) {
            is(1.01, 'most(1.1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a number type (float) equal', function(done) {
            is(1.1, 'most(1.1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (float) above', function(done) {
            is(1.2, 'most(1.1)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'most(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'most(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'most(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'most(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'most(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'most(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'most(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'most(0)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
