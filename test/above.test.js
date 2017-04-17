var should = require('should');
var is = require('../index.js');


describe('above', () => {

    it('should work with a number type (integer)', () => {
        is(2, 'above(1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (integer) equal', () => {
        is(1, 'above(1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (integer) below', () => {
        is(0, 'above(1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (float)', () => {
        is(1.2, 'above(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (float) equal', () => {
        is(1.1, 'above(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (float) below', () => {
        is(1.01, 'above(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'above(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'above(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'above(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'above(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'above(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'above(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'above(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'above(0)').should.be.a.Boolean().and.be.false();
    });

});

