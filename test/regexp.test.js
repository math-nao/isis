var should = require('should');
var is = require('../index.js');


describe('regexp', () => {

    it('should fail with a number type', () => {
        is(1, 'regexp').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'regexp').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'regexp').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'regexp').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'regexp').should.be.a.Boolean().and.be.false();
    });

    it('should work with a regexp type', () => {
        is(new RegExp(''), 'regexp').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'regexp').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'regexp').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'regexp').should.be.a.Boolean().and.be.false();
    });

});

