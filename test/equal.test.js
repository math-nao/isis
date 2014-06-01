var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('equal', function() {

        it('should work with a number type (integer)', function(done) {
            is(1, 'equal(1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (integer)', function(done) {
            is(2, 'equal(1)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with a number type (float)', function(done) {
            is(1.1, 'equal(1.1)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with a number type (float)', function(done) {
            is(1.2, 'equal(1.1)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should work with a string type', function(done) {
            is('foobar', 'equal(foobar)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should fail with a string type', function(done) {
            is('foo-bar', 'equal(foobar)').should.be.a.Boolean.and.be.false;
            done();
        });

    });
});
