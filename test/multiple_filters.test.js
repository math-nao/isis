var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('multiple filters', function() {
        var data = 2.451, data2 = 9, data3 = 'user@example.org';

        it('should work with valid data #1', function(done) {
            is(data, 'float,above(2)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should failed with invalid data on first argument #1', function(done) {
            is(data, 'int,above(2)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should failed with invalid data on second argument #1', function(done) {
            is(data, 'float,above(5)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with valid data #2', function(done) {
            is(data2, 'int,within(8,10)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should failed with invalid data #2', function(done) {
            is(data2, 'int,within(3,4)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with valid data #3', function(done) {
            is(data3, 'string,length(6,40),email').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should failed with invalid data #3', function(done) {
            is(data3, 'string,length(6,7),email').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with invalid data #4', function(done) {
            is('- foobar -', 'string,match(\\bfoo(?:[a-z]{3})),length(6,12)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with invalid data #5', function(done) {
            is('- (foo)bar -', 'string,contain(\\)),length(6,12)').should.be.a.Boolean.and.be.true;
            done();
        });
    });
});
