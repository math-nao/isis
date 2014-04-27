var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('empty', function() {

        it('should fail with a number type', function(done) {
            is(0, 'empty').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('', 'empty').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('foobar', 'empty').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an array type', function(done) {
            is([], 'empty').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([1], 'empty').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an object type', function(done) {
            is({}, 'empty').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({ 'foo': 'bar' }, 'empty').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type (true)', function(done) {
            is(true, 'empty').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type (false)', function(done) {
            is(false, 'empty').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'empty').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'empty').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'empty').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'empty').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
