var should = require('should');
var is = require('../index.js');


describe('integer', () => {

    it('should work with a number type (positive integer)', () => {
        is(1, 'integer').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (negative integer)', () => {
        is(-1, 'integer').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (0 value)', () => {
        is(0, 'integer').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (positive float)', () => {
        is(1.234, 'integer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (negative float)', () => {
        is(-1.234, 'integer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'integer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'integer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'integer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'integer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'integer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'integer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'integer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'integer').should.be.a.Boolean().and.be.false();
    });

});

