var should = require('should');
var is = require('../index.js');


describe('date', () => {

    it('should fail with a number type', () => {
        is(1, 'date').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'date').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'date').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'date').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'date').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'date').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'date').should.be.a.Boolean().and.be.false();
    });

    it('should work with a date type', () => {
        is(new Date(), 'date').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'date').should.be.a.Boolean().and.be.false();
    });

});

