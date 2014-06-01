var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('include', function() {

        it('should fail with a number type', function(done) {
            is(1, 'include(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type (empty)', function(done) {
            is('', 'include(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an array type', function(done) {
            is([1, 2, 3], 'include(2)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([1, 3], 'include(2)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with an array type (multiple)', function(done) {
            is([1, 2, 3], 'include(2, 3)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with an array type (multiple)', function(done) {
            is([1, 3], 'include(2, 3)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'include(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'include(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'include(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'include(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'include(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'include(0)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
