var should = require('should');
var is = require('../index.js');


describe('least', () => {

    it('should work with a number type (integer)', () => {
        is(2, 'least(1)').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (integer) equal', () => {
        is(1, 'least(1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (integer) below', () => {
        is(0, 'least(1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (float)', () => {
        is(1.2, 'least(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (float) equal', () => {
        is(1.1, 'least(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (float) below', () => {
        is(1.01, 'least(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'least(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'least(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'least(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'least(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'least(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'least(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'least(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'least(0)').should.be.a.Boolean().and.be.false();
    });

});

