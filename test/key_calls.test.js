var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('prototype calls', function() {

        it('should work with "above" assert', function(done) {
            is.alphanum('foobar').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "above" assert', function(done) {
            is.alphanum('foobar@').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with "above" assert', function(done) {
            is.above(2, [1]).should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "above" assert', function(done) {
            is.above(2, [3]).should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with "contain" assert', function(done) {
            is.contain('foobar', ['foobar']).should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "contain" assert', function(done) {
            is.contain('foo', ['foobar']).should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with "within" assert', function(done) {
            is.within(2, [1, 3]).should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "within" assert', function(done) {
            is.within(4, [1, 3]).should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with "NaN" assert', function(done) {
            is.NaN(0 / 0).should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "NaN" assert', function(done) {
            is.NaN(1).should.be.a.Boolean.and.be.false;
            done();
        });
    });
});
