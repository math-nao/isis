var should = require('should');
var is = require('../index.js');


describe('imatch', () => {

    it('should work with a number type (integer)', () => {
        is(1, 'imatch(1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (integer)', () => {
        is(2, 'imatch(1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (float)', () => {
        is(1.1, 'imatch(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (float)', () => {
        is(1.2, 'imatch(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('- FooBar -', 'imatch(\\bfoo[a-z]{3})').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type', () => {
        is('foo', 'imatch(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type (equal)', () => {
        is('foobar', 'imatch(foobar)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (empty)', () => {
        is('', 'imatch(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'imatch(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'imatch(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'imatch(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'imatch(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'imatch(0)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a date type', () => {
        is(new Date(), 'imatch(' + (new Date()).getFullYear() + ')').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'imatch(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'imatch(0)').should.be.a.Boolean().and.be.false();
    });

});

