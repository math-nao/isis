var should = require('should');
var is = require('../index.js');


describe('function call filters', () => {
    var data = 2.451;

    it('should work with valid data #1', () => {
        is(data, function (data) {
            return data > 0;
        }).should.be.a.Boolean().and.be.true();
    });

    it('should failed with invalid data #1', () => {
        is(data, function (data) {
            return !data > 0;
        }).should.be.a.Boolean().and.be.false();
    });
});

