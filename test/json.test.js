var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('json', function() {

        it('should fail with a number type', function(done) {
            is(1, 'json').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type', function(done) {
            is(JSON.stringify({ 'foo': 'bar' }), 'json').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should work with a string type (empty object)', function(done) {
            is('{}', 'json').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type (empty)', function(done) {
            is('', 'json').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a string type (simple quote)', function(done) {
            is('{ \'foo\': \'bar\'}', 'json').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with an array type', function(done) {
            is([], 'json').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with an object type', function(done) {
            is({}, 'json').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a boolean type', function(done) {
            is(true, 'json').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should fail with a regexp type', function(done) {
            is(new RegExp(''), 'json').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a function type', function(done) {
            is(function () {}, 'json').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a date type', function(done) {
            is(new Date(), 'json').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should fail with a NaN type', function(done) {
            is(0 / 0, 'json').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
