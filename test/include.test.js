var should = require('should');
var is = require('../index.js');


describe('include', () => {

    it('should fail with a number type', () => {
        is(1, 'include(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type (empty)', () => {
        is('', 'include(0)').should.be.a.Boolean().and.be.false();
    });

    it('should work with an array type', () => {
        is([1, 2, 3], 'include(2)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an array type', () => {
        is([1, 3], 'include(2)').should.be.a.Boolean().and.be.false();
    });

    it('should work with an array type (multiple)', () => {
        is([1, 2, 3], 'include(2, 3)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an array type (multiple)', () => {
        is([1, 3], 'include(2, 3)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'include(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'include(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'include(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'include(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'include(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'include(0)').should.be.a.Boolean().and.be.false();
    });

});

