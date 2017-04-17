var should = require('should');
var is = require('../index.js');


describe('length', () => {

    it('should fail with a number type', () => {
        is(1, 'length(1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('foobar', 'length(6)').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (within)', () => {
        is('foobar', 'length(4, 6)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type', () => {
        is('foobar', 'length(1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type (within)', () => {
        is('foobar', 'length(1, 2)').should.be.a.Boolean().and.be.false();
    });

    it('should work with an array type', () => {
        is(['foo'], 'length(1)').should.be.a.Boolean().and.be.true();
    });

    it('should work with an array type (within)', () => {
        is(['foo', 'bar'], 'length(1, 2)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an array type', () => {
        is([], 'length(1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'length(1, 2)').should.be.a.Boolean().and.be.false();
    });

    it('should work with an object type (length = 1)', () => {
        is({ 'foo': 'bar' }, 'length(1, 2)').should.be.a.Boolean().and.be.true();
    });

    it('should work with an object type (length = 2)', () => {
        is({ 'foo': 'bar', 'foo2': 'bar2' }, 'length(1, 2)').should.be.a.Boolean().and.be.true();
    });

    it('should work with an object type (empty)', () => {
        is({}, 'length(0)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an object type', () => {
        is({}, 'length(1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type (within)', () => {
        is({}, 'length(1, 2)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'length(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type (within)', () => {
        is(true, 'length(0, 2)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'length(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type (within)', () => {
        is(new RegExp(''), 'length(0, 2)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'length(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type (within)', () => {
        is(function () {}, 'length(0, 2)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'length(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type (within)', () => {
        is(new Date(), 'length(0, 2)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'length(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type (within)', () => {
        is(0 / 0, 'length(0, 2)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with undefined value', () => {
        is(undefined, 'length(1)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with undefined value (within)', () => {
        is(undefined, 'length(0, 2)').should.be.a.Boolean().and.be.false();
    });
});

