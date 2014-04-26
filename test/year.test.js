var should = require('should');
var is = require('../index.js')

describe('IS', function() {
    
    describe('year', function() {
        var data = new Date();
        data.setFullYear(data.getFullYear() - 19);

        it('should work with valid data #1', function(done) {
            is(data, 'year(19)').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should work with valid data #2', function(done) {
            is(data, 'year(21)').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with valid data #3', function(done) {
            is(data, 'year(18)').should.be.a.Boolean.and.be.true;
            done();
        });
    
        it('should failed with invalid data range #1', function(done) {
            is(data, 'year(21, 30)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should failed with invalid data type #1', function(done) {
            is(data.toString(), 'year(18)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should failed with invalid data type #1', function(done) {
            is(2005, 'year(18)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should failed with invalid data type #2', function(done) {
            is([], 'year(18)').should.be.a.Boolean.and.be.false;
            done();
        });
    
        it('should failed with invalid data type #3', function(done) {
            is({}, 'year(18)').should.be.a.Boolean.and.be.false;
            done();
        });
    });
});
