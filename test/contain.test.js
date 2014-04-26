var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('contain', function() {

        it('should work with a number type (integer)', function(done) {
            is(1, 'contain(1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (integer)', function(done) {
            is(2, 'contain(1)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a number type (float)', function(done) {
            is(1.1, 'contain(1.1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (float)', function(done) {
            is(1.2, 'contain(1.1)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('- foobar -', 'contain(foobar)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('foo', 'contain(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type (equal)', function(done) {
            is('foobar', 'contain(foobar)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (empty)', function(done) {
            is('', 'contain(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'contain(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'contain(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'contain(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'contain(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'contain(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'contain(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'contain(0)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
