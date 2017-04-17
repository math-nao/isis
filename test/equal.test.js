var should = require('should');
var is = require('../index.js');


describe('equal', () => {

    it('should work with a number type (integer)', () => {
        is(1, 'equal(1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (integer)', () => {
        is(2, 'equal(1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a number type (float)', () => {
        is(1.1, 'equal(1.1)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type (float)', () => {
        is(1.2, 'equal(1.1)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('foobar', 'equal(foobar)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type', () => {
        is('foo-bar', 'equal(foobar)').should.be.a.Boolean().and.be.false();
    });

});

