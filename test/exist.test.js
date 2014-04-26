var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('exist', function() {

        var definedVar = 1, undefinedVar, nullVar = null;

        it('should work with a defined variable', function(done) {
            is(definedVar, 'exist').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a undefined variable', function(done) {
            is(undefinedVar, 'exist').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a null value', function(done) {
            is(nullVar, 'exist').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a number type (positive integer)', function(done) {
            is(1, 'exist').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('', 'exist').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with an array type', function(done) {
            is([], 'exist').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with an object type', function(done) {
            is({}, 'exist').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a boolean type', function(done) {
            is(true, 'exist').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a regexp type', function(done) {
            is(new RegExp(''), 'exist').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a function type', function(done) {
            is(function () {}, 'exist').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a date type', function(done) {
            is(new Date(), 'exist').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with a NaN type', function(done) {
            is(0 / 0, 'exist').should.be.a.Boolean.and.be.true;
            done();
        });

    });
});
