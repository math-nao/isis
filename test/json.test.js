var should = require('should');
var is = require('../index.js');


describe('json', () => {

    it('should fail with a number type', () => {
        is(1, 'json').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is(JSON.stringify({ 'foo': 'bar' }), 'json').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (empty object)', () => {
        is('{}', 'json').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (empty)', () => {
        is('', 'json').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type (simple quote)', () => {
        is('{ \'foo\': \'bar\'}', 'json').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'json').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'json').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'json').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'json').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'json').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'json').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'json').should.be.a.Boolean().and.be.false();
    });

});

