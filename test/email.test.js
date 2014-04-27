var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('email', function() {

        it('should fail with a number type', function(done) {
            is(1, 'email').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('johndoe@example.com', 'email').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (dot)', function(done) {
            is('john.doe@example.com', 'email').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (hyphen)', function(done) {
            is('john-doe@example.com', 'email').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (underscore)', function(done) {
            is('john_doe@example.com', 'email').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (plus)', function(done) {
            is('johndoe+notes@example.com', 'email').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (last char)', function(done) {
            is('johndoe@example.comm', 'email').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type (no @)', function(done) {
            is('johndoe-example.com', 'email').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'email').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'email').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'email').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'email').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'email').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'email').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'email').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
