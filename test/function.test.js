var should = require('should');
var is = require('../index.js');


describe('function', () => {

    it('should fail with a number type', () => {
        is(1, 'function').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'function').should.be.a.Boolean().and.be.false();
    });

    it('should work with an array type', () => {
        is([], 'function').should.be.a.Boolean().and.be.false();
    });

    it('should work with an object type', () => {
        is({}, 'function').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'function').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'function').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'function').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'function').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'function').should.be.a.Boolean().and.be.false();
    });

});

