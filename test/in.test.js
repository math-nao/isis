var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('in', function() {

        it('should work with a number type', function(done) {
            is(1, 'in(1, 2)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type', function(done) {
            is(3, 'in(1, 2)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('1', 'in(1, 2)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('3', 'in(1, 2)').should.be.a.Boolean.and.be.false;
            done();
        });
        
        it('should fail with a string type (empty)', function(done) {
            is('', 'in(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([1, 2], 'in(2)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'in(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'in(0)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'in(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'in(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'in(0)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'in(0)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
