var should = require('should');
var is = require('../index.js');


describe('creditcard', () => {

    it('should fail with a number type', () => {
        is(1, 'creditcard').should.be.a.Boolean().and.be.false();
    });
    
    it('should work with a string type (new visa card)', () => {
        is('4123456789012345', 'creditcard').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (new visa card)', () => {
        is('9123456789012345', 'creditcard').should.be.a.Boolean().and.be.false();
    });
    
    it('should work with a string type (old visa card)', () => {
        is('4123456789012', 'creditcard').should.be.a.Boolean().and.be.true();
    });
    
    it('should fail with a string type (old visa card)', () => {
        is('9123456789012', 'creditcard').should.be.a.Boolean().and.be.false();
    });
    
    it('should work with a string type (mastercard)', () => {
        is('5123456789012345', 'creditcard').should.be.a.Boolean().and.be.true();
    });
    
    it('should fail with a string type (mastercard)', () => {
        is('512345678901234', 'creditcard').should.be.a.Boolean().and.be.false();
    });
    
    it('should work with a string type (american express)', () => {
        is('341234567890123', 'creditcard').should.be.a.Boolean().and.be.true();
    });
    
    it('should fail with a string type (american express)', () => {
        is('351234567890123', 'creditcard').should.be.a.Boolean().and.be.false();
    });
    
    it('should work with a string type (diner club)', () => {
        is('30012345678901', 'creditcard').should.be.a.Boolean().and.be.true();
    });
    
    it('should fail with a string type (diner club)', () => {
        is('40012345678901', 'creditcard').should.be.a.Boolean().and.be.false();
    });
    
    it('should work with a string type (discover)', () => {
        is('4011123456789012', 'creditcard').should.be.a.Boolean().and.be.true();
    });
    
    it('should fail with a string type (discover)', () => {
        is('40012345678912', 'creditcard').should.be.a.Boolean().and.be.false();
    });
    
    it('should work with a string type (jcb)', () => {
        is('213112345678901', 'creditcard').should.be.a.Boolean().and.be.true();
    });
    
    it('should fail with a string type (jcb)', () => {
        is('213212345678901', 'creditcard').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'creditcard').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'creditcard').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'creditcard').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'creditcard').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'creditcard').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'creditcard').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'creditcard').should.be.a.Boolean().and.be.false();
    });

});

