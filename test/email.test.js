var should = require('should');
var is = require('../index.js');


describe('email', () => {

    it('should fail with a number type', () => {
        is(1, 'email').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('johndoe@example.com', 'email').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (dot)', () => {
        is('john.doe@example.com', 'email').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (hyphen)', () => {
        is('john-doe@example.com', 'email').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (underscore)', () => {
        is('john_doe@example.com', 'email').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (plus)', () => {
        is('johndoe+notes@example.com', 'email').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (last char)', () => {
        is('johndoe@example.comm9', 'email').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type (no @)', () => {
        is('johndoe-example.com', 'email').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'email').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'email').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'email').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'email').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'email').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'email').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'email').should.be.a.Boolean().and.be.false();
    });

});

