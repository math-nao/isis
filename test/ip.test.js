var should = require('should');
var is = require('../index.js');


describe('ip', () => {

    it('should fail with a number type', () => {
        is(1, 'ip').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('255.255.255.255', 'ip').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (localhost)', () => {
        is('127.0.0.1', 'ip').should.be.a.Boolean().and.be.true();
    });

    it('should work with a string type (private ip)', () => {
        is('10.0.0.1', 'ip').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type (out of range)', () => {
        is('256.0.0.1', 'ip').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type (part missing)', () => {
        is('255.0.1', 'ip').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'ip').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'ip').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'ip').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'ip').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'ip').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'ip').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'ip').should.be.a.Boolean().and.be.false();
    });

});

