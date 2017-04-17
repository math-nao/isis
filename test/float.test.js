var should = require('should');
var is = require('../index.js');


describe('float', () => {

    it('should work with a number type (positive float)', () => {
        is(1.234, 'float').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (negative float)', () => {
        is(-1.234, 'float').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (positive integer)', () => {
        is(1, 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (negative integer)', () => {
        is(-1, 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (0 value)', () => {
        is(0, 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'float').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'float').should.be.a.Boolean().and.be.false();
    });

});

