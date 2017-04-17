var should = require('should');
var is = require('../index.js');


describe('buffer', () => {

    it('should work with a buffer type', () => {
        is(new Buffer(8), 'buffer').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type', () => {
        is(1, 'buffer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a string type', () => {
        is('', 'buffer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an array type', () => {
        is([], 'buffer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'buffer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'buffer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'buffer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'buffer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'buffer').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'buffer').should.be.a.Boolean().and.be.false();
    });

});

