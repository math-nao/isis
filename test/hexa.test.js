var should = require('should');
var is = require('../index.js');


describe('hexa', () => {

    it('should work with a string type (hexa uppercase)', () => {
        is('0123456789ABCDEF', 'hexa').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (hexa lowercase)', () => {
        is('0123456789abcdef', 'hexa').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (non hexa)', () => {
        is('0123456789abcdefg', 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (positive integer)', () => {
        is(1234567890, 'hexa').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (negative integer)', () => {
        is(-1234567890, 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (positive float)', () => {
        is(1.234567890, 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (negative float)', () => {
        is(-1.234567890, 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'hexa').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'hexa').should.be.a.Boolean().and.be.false();
    });

});

