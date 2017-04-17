var should = require('should');
var is = require('../index.js');


describe('negate filters', () => {
    var data = 2.451, data2 = 9, data3 = 'user@example.org';

    it('should work with valid data #1', () => {
        is(data, 'float,!above(2)').should.be.a.Boolean().and.be.false();
    });

    it('should failed with invalid data on first argument #1', () => {
        is(data, '!int,above(2)').should.be.a.Boolean().and.be.true();
    });

    it('should failed with invalid data on second argument #1', () => {
        is(data, '!float').should.be.a.Boolean().and.be.false();
    });

    it('should work with valid data #2', () => {
        is(data2, '!within(8, 10)').should.be.a.Boolean().and.be.false();
    });

    it('should failed with invalid data #2', () => {
        is(data2, 'int,!within(3, 4)').should.be.a.Boolean().and.be.true();
    });

    it('should work with valid data #3', () => {
        is(data3, 'string,length(6, 40),email').should.be.a.Boolean().and.be.true();
    });

    it('should failed with invalid data #3', () => {
        is(data3, 'string,!length(6, 7),email').should.be.a.Boolean().and.be.true();
    });

    it('should work with invalid data #4', () => {
        is('- foobar -', 'string,match(\\bfoo(?:[a-z]{3})),!length(6, 12)').should.be.a.Boolean().and.be.false();
    });

    it('should work with invalid data #5', () => {
        is('- (foo)bar -', 'string,contain(\\)),!length(0, 4)').should.be.a.Boolean().and.be.true();
    });
});

