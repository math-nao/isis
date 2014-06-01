var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('url', function() {

        it('should fail with a number type', function(done) {
            is(1, 'url').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type (http url)', function(done) {
            is('http://foo.bar', 'url').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (https url)', function(done) {
            is('http://foo.bar', 'url').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (port)', function(done) {
            is('http://foo.bar:8080', 'url').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (no scheme)', function(done) {
            is('foo.bar', 'url').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type (uri)', function(done) {
            is('http://foo.bar:8080/some/uri', 'url').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('foobar', 'url').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'url').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'url').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'url').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'url').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'url').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'url').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'url').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
