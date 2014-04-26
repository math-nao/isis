var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('alphanum', function() {

        it('should work with a string type (alphanum uppercase)', function(done) {
            is('0123456789ABCDEF', 'alphanum').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a string type (alphanum lowercase)', function(done) {
            is('0123456789abcdef', 'alphanum').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a string type (non alphanum)', function(done) {
            is('0123456789abcdefg', 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a number type (positive integer)', function(done) {
            is(1, 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
