var should = require('should');
var is = require('../index.js');


describe('NaN', () => {

    it('should fail with a number type', () => {
        is(1, 'NaN').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'NaN').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'NaN').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'NaN').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'NaN').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'NaN').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'NaN').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'NaN').should.be.a.Boolean().and.be.false();
    });

    it('should work with a NaN type', () => {
        is(0 / 0, 'NaN').should.be.a.Boolean().and.be.true();
    });

});

