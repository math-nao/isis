var should = require('should');
var is = require('../index.js');


describe('alphanum', () => {

    it('should work with a string type (alphanum uppercase)', () => {
        is('0123456789ABCDEFGHIJKLMOPQRSTUVWXYZ', 'alphanum').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (alphanum lowercase)', () => {
        is('0123456789abcdefghijklmopqrstuvwxyz', 'alphanum').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (non alphanum)', () => {
        is('0123456789abcdefghijklmopqrstuvwxyz@', 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a number type', () => {
        is(1, 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'alphanum').should.be.a.Boolean().and.be.false();
    });

});

