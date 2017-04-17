var should = require('should');
var is = require('../index.js');


describe('object', () => {

    it('should fail with a number type', () => {
        is(1, 'object').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'object').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'object').should.be.a.Boolean().and.be.false();
    });

    it('should work with an object type', () => {
        is({}, 'object').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a boolean type', () => {
        is(true, 'object').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'object').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'object').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'object').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'object').should.be.a.Boolean().and.be.false();
    });

});

