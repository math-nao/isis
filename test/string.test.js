var should = require('should');
var is = require('../index.js');


describe('string', () => {

    it('should fail with a number type', () => {
        is(1, 'string').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('', 'string').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an array type', () => {
        is([], 'string').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'string').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'string').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'string').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'string').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'string').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'string').should.be.a.Boolean().and.be.false();
    });

});

