var should = require('should');
var is = require('../index.js');


describe('in', () => {

    it('should work with a number type', () => {
        is(1, 'in(1, 2)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a number type', () => {
        is(3, 'in(1, 2)').should.be.a.Boolean().and.be.false();
    });

    it('should work with a string type', () => {
        is('1', 'in(1, 2)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with a string type', () => {
        is('3', 'in(1, 2)').should.be.a.Boolean().and.be.false();
    });
    
    it('should fail with a string type (empty)', () => {
        is('', 'in(0)').should.be.a.Boolean().and.be.false();
    });

    it('should work with an array type', () => {
        is([1, 2, 3], 'in(3, 4, 5)').should.be.a.Boolean().and.be.true();
    });

    it('should fail with an array type', () => {
        is([1, 2, 3], 'in(4, 5)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with an object type', () => {
        is({}, 'in(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a boolean type', () => {
        is(true, 'in(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a regexp type', () => {
        is(new RegExp(''), 'in(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a function type', () => {
        is(function () {}, 'in(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a date type', () => {
        is(new Date(), 'in(0)').should.be.a.Boolean().and.be.false();
    });

    it('should fail with a NaN type', () => {
        is(0 / 0, 'in(0)').should.be.a.Boolean().and.be.false();
    });

});

