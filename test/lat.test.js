var should = require('should');
var is = require('../index.js');


describe('lat', () => {

    it('should work with a number type (positive integer)', () => {
        is(37, 'lat').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (negative integer)', () => {
        is(-37, 'lat').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (positive float)', () => {
        is(37.4418834, 'lat').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (negative float)', () => {
        is(-37.4418834, 'lat').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (> 90)', () => {
        is(90.01, 'lat').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (< -90)', () => {
        is(-90.01, 'lat').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type (> 0)', () => {
        is('50.123', 'lat').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (< 0)', () => {
        is('-50.123', 'lat').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (empty)', () => {
        is('', 'lat').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'lat').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'lat').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'lat').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'lat').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'lat').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'lat').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'lat').should.be.a.Boolean().and.be.false();
    });

});

