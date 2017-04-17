var should = require('should');
var is = require('../index.js');


describe('exist', () => {

    var definedVar = 1, undefinedVar, nullVar = null;

    it('should work with a defined variable', () => {
        is(definedVar, 'exist').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a undefined variable', () => {
        is(undefinedVar, 'exist').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a null value', () => {
        is(nullVar, 'exist').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (positive integer)', () => {
        is(1, 'exist').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type', () => {
        is('', 'exist').should.be.a.Boolean().and.be.true();
    });

    it('should work with an array type', () => {
        is([], 'exist').should.be.a.Boolean().and.be.true();
    });

    it('should work with an object type', () => {
        is({}, 'exist').should.be.a.Boolean().and.be.true();
    });

    it('should work with a boolean type', () => {
        is(true, 'exist').should.be.a.Boolean().and.be.true();
    });

    it('should work with a regexp type', () => {
        is(new RegExp(''), 'exist').should.be.a.Boolean().and.be.true();
    });

    it('should work with a function type', () => {
        is(function () {}, 'exist').should.be.a.Boolean().and.be.true();
    });

    it('should work with a date type', () => {
        is(new Date(), 'exist').should.be.a.Boolean().and.be.true();
    });

    it('should work with a NaN type', () => {
        is(0 / 0, 'exist').should.be.a.Boolean().and.be.true();
    });

});

