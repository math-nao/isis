var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('match', function() {

        it('should work with a number type (integer)', function(done) {
            is(1, 'match(1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (integer)', function(done) {
            is(2, 'match(1)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a number type (float)', function(done) {
            is(1.1, 'match(1.1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (float)', function(done) {
            is(1.2, 'match(1.1)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('- foobar -', 'match(\bfoo[a-z]{3})').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('foo', 'match(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type (equal)', function(done) {
            is('foobar', 'match(foobar)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (empty)', function(done) {
            is('', 'match(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'match(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'match(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'match(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'match(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'match(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'match(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'match(0)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
