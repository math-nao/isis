var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('boolean', function() {

        it('should fail with a number type', function(done) {
            is(1, 'boolean').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('', 'boolean').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'boolean').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an object type', function(done) {
            is({}, 'boolean').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a boolean type (true value)', function(done) {
            is(true, 'boolean').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a boolean type (false value)', function(done) {
            is(false, 'boolean').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'boolean').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'boolean').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'boolean').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'boolean').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
