var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('imatch', function() {

        it('should work with a number type (integer)', function(done) {
            is(1, 'imatch(1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (integer)', function(done) {
            is(2, 'imatch(1)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a number type (float)', function(done) {
            is(1.1, 'imatch(1.1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (float)', function(done) {
            is(1.2, 'imatch(1.1)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('- FooBar -', 'imatch(\bfoo[a-z]{3})').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('foo', 'imatch(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type (equal)', function(done) {
            is('foobar', 'imatch(foobar)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (empty)', function(done) {
            is('', 'imatch(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'imatch(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'imatch(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'imatch(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'imatch(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'imatch(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'imatch(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'imatch(0)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
