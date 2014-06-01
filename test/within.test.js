var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('within', function() {
        
        describe('with Integer data', function() {
            var data = 2;

            it('should work with valid data #1', function(done) {
                is(data, 'within(1, 3)').should.be.a.Boolean.and.be.true;
                done();
            });

            it('should work with valid data #2', function(done) {
                is(data, 'within(2, 3)').should.be.a.Boolean.and.be.true;
                done();
            });
        
            it('should failed with invalid data #1', function(done) {
                is(data, 'within(3, 3)').should.be.a.Boolean.and.be.false;
                done();
            });
        });
        
        describe('with Floating data', function() {
            var data = 2.01221893;

            it('should work with valid data #1', function(done) {
                is(data, 'within(1, 3)').should.be.a.Boolean.and.be.true;
                done();
            });

            it('should work with valid data #2', function(done) {
                is(data, 'within(2.011, 3)').should.be.a.Boolean.and.be.true;
                done();
            });

            it('should failed with invalid data #1', function(done) {
                is(data, 'within(2.02, 3)').should.be.a.Boolean.and.be.false;
                done();
            });
        
            it('should failed with invalid data #2', function(done) {
                is(data, 'within(3, 3)').should.be.a.Boolean.and.be.false;
                done();
            });
        });
        
        describe('with String data', function() {
            var data = '2.01221893';

            it('should work with valid data #1', function(done) {
                is(data, 'within(1, 3)').should.be.a.Boolean.and.be.true;
                done();
            });

            it('should work with valid data #2', function(done) {
                is(data, 'within(2.011, 3)').should.be.a.Boolean.and.be.true;
                done();
            });

            it('should failed with invalid data #1', function(done) {
                is(data, 'within(2.02, 3)').should.be.a.Boolean.and.be.false;
                done();
            });
        
            it('should failed with invalid data #2', function(done) {
                is(data, 'within(3, 3)').should.be.a.Boolean.and.be.false;
                done();
            });
        });

    });
});
