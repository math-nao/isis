var should = require('should');
var is = require('../index.js');


describe('key', () => {

    it('should fail with a number type', () => {
        is(1, 'key(toString)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type (empty)', () => {
        is('', 'key(toString)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'key(toString)').should.be.a.Boolean().and.be.false();
    });

    it('should work with an object type', () => {
        is({ 'foo': 'bar' }, 'key(foo)').should.be.a.Boolean().and.be.true();
    });

    it('should work with an object type (multiple keys)', () => {
        is({ 'a': 1, 'b': 2, 'c': 3 }, 'key(a,b,c)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an object type', () => {
        is({}, 'key(toString)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type (multiple keys)', () => {
        is({ 'a': 1, 'b': 2, 'c': 3 }, 'key(a,b,c,d)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'key(toString)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'key(toString)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'key(toString)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'key(toString)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'key(toString)').should.be.a.Boolean().and.be.false();
    });

});

