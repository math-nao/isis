var should = require('should');
var is = require('../index.js');


describe('number', () => {

    it('should work with a number type (integer)', () => {
        is(1, 'number').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (float)', () => {
        is(1.234, 'number').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type', () => {
        is('', 'number').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'number').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'number').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'number').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'number').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'number').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'number').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'number').should.be.a.Boolean().and.be.false();
    });

});

