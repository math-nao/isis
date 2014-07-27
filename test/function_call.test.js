var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('function call filters', function() {
        var data = 2.451;

        it('should work with valid data #1', function(done) {
            is(data, function (data) {
                return data > 0;
            }).should.be.a.Boolean.and.be.true;
            done();
        });

        it('should failed with invalid data #1', function(done) {
            is(data, function (data) {
                return !data > 0;
            }).should.be.a.Boolean.and.be.false;
            done();
        });
    });
});
