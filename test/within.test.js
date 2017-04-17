var should = require('should');
var is = require('../index.js');


describe('within', () => {
    
    describe('with Integer data', () => {
        var data = 2;

        it('should work with valid data #1', () => {
            is(data, 'within(1, 3)').should.be.a.Boolean().and.be.true();
        });

        it('should work with valid data #2', () => {
            is(data, 'within(2, 3)').should.be.a.Boolean().and.be.true();
        });
    
        it('should failed with invalid data #1', () => {
            is(data, 'within(3, 3)').should.be.a.Boolean().and.be.false();
        });
    });
    
    describe('with Floating data', () => {
        var data = 2.01221893;

        it('should work with valid data #1', () => {
            is(data, 'within(1, 3)').should.be.a.Boolean().and.be.true();
        });

        it('should work with valid data #2', () => {
            is(data, 'within(2.011, 3)').should.be.a.Boolean().and.be.true();
        });

        it('should failed with invalid data #1', () => {
            is(data, 'within(2.02, 3)').should.be.a.Boolean().and.be.false();
        });
    
        it('should failed with invalid data #2', () => {
            is(data, 'within(3, 3)').should.be.a.Boolean().and.be.false();
        });
    });
    
    describe('with String data', () => {
        var data = '2.01221893';

        it('should work with valid data #1', () => {
            is(data, 'within(1, 3)').should.be.a.Boolean().and.be.true();
        });

        it('should work with valid data #2', () => {
            is(data, 'within(2.011, 3)').should.be.a.Boolean().and.be.true();
        });

        it('should failed with invalid data #1', () => {
            is(data, 'within(2.02, 3)').should.be.a.Boolean().and.be.false();
        });
    
        it('should failed with invalid data #2', () => {
            is(data, 'within(3, 3)').should.be.a.Boolean().and.be.false();
        });
    });

});

