var should = require('should');
var is = require('../index.js');


describe('contain', () => {

    it('should work with a number type (integer)', () => {
        is(1, 'contain(1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (integer)', () => {
        is(2, 'contain(1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (float)', () => {
        is(1.1, 'contain(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (float)', () => {
        is(1.2, 'contain(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('- foobar -', 'contain(foobar)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type', () => {
        is('foo', 'contain(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type (equal)', () => {
        is('foobar', 'contain(foobar)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (empty)', () => {
        is('', 'contain(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'contain(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'contain(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'contain(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'contain(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'contain(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'contain(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'contain(0)').should.be.a.Boolean().and.be.false();
    });

});

