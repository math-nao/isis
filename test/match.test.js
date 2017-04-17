var should = require('should');
var is = require('../index.js');


describe('match', () => {

    it('should work with a number type (integer)', () => {
        is(1, 'match(1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (integer)', () => {
        is(2, 'match(1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (float)', () => {
        is(1.1, 'match(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (float)', () => {
        is(1.2, 'match(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('- foobar -', 'match(\\bfoo(?:[a-z]{3}))').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type', () => {
        is('foo', 'match(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type (equal)', () => {
        is('foobar', 'match(foobar)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (empty)', () => {
        is('', 'match(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'match(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'match(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'match(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'match(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'match(0)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a date type', () => {
        is(new Date(), 'match(' + (new Date()).getFullYear() + ')').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'match(foobar)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'match(0)').should.be.a.Boolean().and.be.false();
    });

});

