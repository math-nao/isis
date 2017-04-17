var should = require('should');
var is = require('../index.js');


describe('url', () => {

    it('should fail with a number type', () => {
        is(1, 'url').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type (http url)', () => {
        is('http://foo.bar', 'url').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (https url)', () => {
        is('http://foo.bar', 'url').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (port)', () => {
        is('http://foo.bar:8080', 'url').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (no scheme)', () => {
        is('foo.bar', 'url').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type (uri)', () => {
        is('http://foo.bar:8080/some/uri', 'url').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type', () => {
        is('foobar', 'url').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'url').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'url').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'url').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'url').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'url').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'url').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'url').should.be.a.Boolean().and.be.false();
    });

});

