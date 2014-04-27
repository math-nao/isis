var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('creditcard', function() {

        it('should fail with a number type', function(done) {
            is(1, 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
        
        it('should work with a string type (new visa card)', function(done) {
            is('4123456789012345', 'creditcard').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (new visa card)', function(done) {
            is('9123456789012345', 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
        
        it('should work with a string type (old visa card)', function(done) {
            is('4123456789012', 'creditcard').should.be.a.Boolean.and.be.true;
            done();
        });
        
        it('should fail with a string type (old visa card)', function(done) {
            is('9123456789012', 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
        
        it('should work with a string type (mastercard)', function(done) {
            is('5123456789012345', 'creditcard').should.be.a.Boolean.and.be.true;
            done();
        });
        
        it('should fail with a string type (mastercard)', function(done) {
            is('512345678901234', 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
        
        it('should work with a string type (american express)', function(done) {
            is('341234567890123', 'creditcard').should.be.a.Boolean.and.be.true;
            done();
        });
        
        it('should fail with a string type (american express)', function(done) {
            is('351234567890123', 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
        
        it('should work with a string type (diner club)', function(done) {
            is('30012345678901', 'creditcard').should.be.a.Boolean.and.be.true;
            done();
        });
        
        it('should fail with a string type (diner club)', function(done) {
            is('40012345678901', 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
        
        it('should work with a string type (discover)', function(done) {
            is('4011123456789012', 'creditcard').should.be.a.Boolean.and.be.true;
            done();
        });
        
        it('should fail with a string type (discover)', function(done) {
            is('40012345678912', 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
        
        it('should work with a string type (jcb)', function(done) {
            is('213112345678901', 'creditcard').should.be.a.Boolean.and.be.true;
            done();
        });
        
        it('should fail with a string type (jcb)', function(done) {
            is('213212345678901', 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'creditcard').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
