var should = require('should');
var is = require('../index.js');


describe('most', () => {

    it('should work with a number type (integer)', () => {
        is(0, 'most(1)').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (integer) equal', () => {
        is(1, 'most(1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (integer) above', () => {
        is(2, 'most(1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (float)', () => {
        is(1.01, 'most(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (float) equal', () => {
        is(1.1, 'most(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (float) above', () => {
        is(1.2, 'most(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'most(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'most(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'most(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'most(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'most(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'most(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'most(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'most(0)').should.be.a.Boolean().and.be.false();
    });

});

