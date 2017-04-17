var should = require('should');
var is = require('../index.js');


describe('arguments', () => {

    it('should work with an argument object type', () => {
        is(arguments, 'arguments').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type', () => {
        is(1, 'arguments').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'arguments').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'arguments').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'arguments').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'arguments').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'arguments').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'arguments').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'arguments').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'arguments').should.be.a.Boolean().and.be.false();
    });

});

