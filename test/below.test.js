var should = require('should');
var is = require('../index.js');


describe('below', () => {

    it('should work with a number type (integer)', () => {
        is(0, 'below(1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (integer) equal', () => {
        is(1, 'below(1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (integer) above', () => {
        is(2, 'below(1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (float)', () => {
        is(1.01, 'below(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (float) equal', () => {
        is(1.1, 'below(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (float) above', () => {
        is(1.2, 'below(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'below(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'below(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'below(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'below(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'below(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'below(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'below(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'below(0)').should.be.a.Boolean().and.be.false();
    });

});

