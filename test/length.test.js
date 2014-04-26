var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('length', function() {

        it('should work with a number type', function(done) {
            is(1, 'length(1)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('foobar', 'length(6)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (within)', function(done) {
            is('foobar', 'length(4, 6)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('foobar', 'length(1)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type (within)', function(done) {
            is('foobar', 'length(1, 2)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an array type', function(done) {
            is(['foo'], 'length(1)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with an array type (within)', function(done) {
            is(['foo', 'bar'], 'length(1, 2)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'length(1)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'length(1, 2)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with an object type (length = 1)', function(done) {
            is({ 'foo': 'bar' }, 'length(1, 2)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with an object type (length = 2)', function(done) {
            is({ 'foo': 'bar', 'foo2': 'bar2' }, 'length(1, 2)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with an object type (empty)', function(done) {
            is({}, 'length(0)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'length(1)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type (within)', function(done) {
            is({}, 'length(1, 2)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'length(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type (within)', function(done) {
            is(true, 'length(0, 2)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'length(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type (within)', function(done) {
            is(new RegExp(''), 'length(0, 2)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'length(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type (within)', function(done) {
            is(function () {}, 'length(0, 2)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'length(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type (within)', function(done) {
            is(new Date(), 'length(0, 2)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'length(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type (within)', function(done) {
            is(0 / 0, 'length(0, 2)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
