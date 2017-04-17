var should = require('should');
var is = require('../index.js');


describe('lng', () => {

    it('should work with a number type (positive integer)', () => {
        is(122, 'lng').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (negative integer)', () => {
        is(-122, 'lng').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (positive float)', () => {
        is(122.1430195, 'lng').should.be.a.Boolean().and.be.true();
    });

    it('should work with a number type (negative float)', () => {
        is(-122.1430195, 'lng').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (> 180)', () => {
        is(180.01, 'lng').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type (< -180)', () => {
        is(-180.01, 'lng').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type (> 0)', () => {
        is('100.123', 'lng').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (< 0)', () => {
        is('-100.123', 'lng').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (empty)', () => {
        is('', 'lng').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'lng').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'lng').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'lng').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'lng').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'lng').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'lng').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'lng').should.be.a.Boolean().and.be.false();
    });

});

