var should = require('should');
var is = require('../index.js');


describe('boolean', () => {

    it('should fail with a number type', () => {
        is(1, 'boolean').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'boolean').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'boolean').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'boolean').should.be.a.Boolean().and.be.false();
    });

    it('should work with a boolean type (true value)', () => {
        is(true, 'boolean').should.be.a.Boolean().and.be.true();
    });

    it('should work with a boolean type (false value)', () => {
        is(false, 'boolean').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'boolean').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'boolean').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'boolean').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'boolean').should.be.a.Boolean().and.be.false();
    });

});

