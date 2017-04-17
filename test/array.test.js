var should = require('should');
var is = require('../index.js');


describe('array', () => {

    it('should fail with a number type', () => {
        is(1, 'array').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'array').should.be.a.Boolean().and.be.false();
    });

    it('should work with an array type', () => {
        is([], 'array').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an object type', () => {
        is({}, 'array').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'array').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'array').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'array').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'array').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'array').should.be.a.Boolean().and.be.false();
    });

});

