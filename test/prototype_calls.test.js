var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('prototype calls', function() {

        it('should work with "alphanum" assert', function(done) {
            is.prototype.alphanum('foobar').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "alphanum" assert', function(done) {
            is.prototype.alphanum('foobar@').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with "above" assert', function(done) {
            is.prototype.above(2, [1]).should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "above" assert', function(done) {
            is.prototype.above(2, [3]).should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with "contain" assert', function(done) {
            is.prototype.contain('foobar', ['foobar']).should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "contain" assert', function(done) {
            is.prototype.contain('foo', ['foobar']).should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with "within" assert', function(done) {
            is.prototype.within(2, [1, 3]).should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "within" assert', function(done) {
            is.prototype.within(4, [1, 3]).should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with "NaN" assert', function(done) {
            is.prototype.NaN(0 / 0).should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with "NaN" assert', function(done) {
            is.prototype.NaN(1).should.be.a.Boolean.and.be.false;
            done();
        });
    });
});
