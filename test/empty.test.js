var should = require('should');
var is = require('../index.js');


describe('empty', () => {

    it('should fail with a number type', () => {
        is(0, 'empty').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('', 'empty').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type', () => {
        is('foobar', 'empty').should.be.a.Boolean().and.be.false();
    });

    it('should work with an array type', () => {
        is([], 'empty').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an array type', () => {
        is([1], 'empty').should.be.a.Boolean().and.be.false();
    });

    it('should work with an object type', () => {
        is({}, 'empty').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an object type', () => {
        is({ 'foo': 'bar' }, 'empty').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type (true)', () => {
        is(true, 'empty').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type (false)', () => {
        is(false, 'empty').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'empty').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'empty').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'empty').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'empty').should.be.a.Boolean().and.be.false();
    });

});

