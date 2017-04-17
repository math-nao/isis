var should = require('should');
var is = require('../index.js');


describe('error', () => {

    it('should work with an error type', () => {
        is(new Error(), 'error').should.be.a.Boolean().and.be.true();
    });

    it('should work with an error type', () => {
        is(new TypeError(), 'error').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an error type', () => {
        is({ name: 'Error', message: 'an error occurred' }, 'error').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type', () => {
        is(1, 'error').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'error').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'error').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'error').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'error').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'error').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'error').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'error').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'error').should.be.a.Boolean().and.be.false();
    });

});

