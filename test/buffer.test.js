var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('buffer', function() {

        it('should work with a buffer type', function(done) {
            is(new Buffer(8), 'buffer').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type', function(done) {
            is(1, 'buffer').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'buffer').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'buffer').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'buffer').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'buffer').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'buffer').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'buffer').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'buffer').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'buffer').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
