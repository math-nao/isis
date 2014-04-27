var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('key', function() {

        it('should fail with a number type', function(done) {
            is(1, 'key(toString)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type (empty)', function(done) {
            is('', 'key(toString)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'key(toString)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an object type', function(done) {
            is({ 'foo': 'bar' }, 'key(foo)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with an object type (multiple keys)', function(done) {
            is({ 'a': 1, 'b': 2, 'c': 3 }, 'key(a,b,c)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'key(toString)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type (multiple keys)', function(done) {
            is({ 'a': 1, 'b': 2, 'c': 3 }, 'key(a,b,c,d)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'key(toString)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'key(toString)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'key(toString)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'key(toString)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'key(toString)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
