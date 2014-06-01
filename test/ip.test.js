var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('ip', function() {

        it('should fail with a number type', function(done) {
            is(1, 'ip').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('255.255.255.255', 'ip').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (localhost)', function(done) {
            is('127.0.0.1', 'ip').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (private ip)', function(done) {
            is('10.0.0.1', 'ip').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (out of range)', function(done) {
            is('256.0.0.1', 'ip').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type (part missing)', function(done) {
            is('255.0.1', 'ip').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'ip').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'ip').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'ip').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'ip').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'ip').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'ip').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'ip').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
