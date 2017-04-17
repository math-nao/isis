var should = require('should');
var is = require('../index.js');


describe('prototype calls', () => {

    it('should work with "alphanum" assert', () => {
        is.prototype.alphanum('foobar').should.be.a.Boolean().and.be.true();
    });

    it('should fail with "alphanum" assert', () => {
        is.prototype.alphanum('foobar@').should.be.a.Boolean().and.be.false();
    });

    it('should work with "above" assert', () => {
        is.prototype.above(2, [1]).should.be.a.Boolean().and.be.true();
    });

    it('should fail with "above" assert', () => {
        is.prototype.above(2, [3]).should.be.a.Boolean().and.be.false();
    });

    it('should work with "contain" assert', () => {
        is.prototype.contain('foobar', ['foobar']).should.be.a.Boolean().and.be.true();
    });

    it('should fail with "contain" assert', () => {
        is.prototype.contain('foo', ['foobar']).should.be.a.Boolean().and.be.false();
    });

    it('should work with "within" assert', () => {
        is.prototype.within(2, [1, 3]).should.be.a.Boolean().and.be.true();
    });

    it('should fail with "within" assert', () => {
        is.prototype.within(4, [1, 3]).should.be.a.Boolean().and.be.false();
    });

    it('should work with "NaN" assert', () => {
        is.prototype.NaN(0 / 0).should.be.a.Boolean().and.be.true();
    });

    it('should fail with "NaN" assert', () => {
        is.prototype.NaN(1).should.be.a.Boolean().and.be.false();
    });
});

