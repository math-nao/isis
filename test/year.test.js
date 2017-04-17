var should = require('should');
var is = require('../index.js');


describe('year', () => {
    var data = new Date();
    data.setFullYear(data.getFullYear() - 19);

    it('should work with valid data #1', () => {
        is(data, 'year(19)').should.be.a.Boolean().and.be.true();
    });

    it('should work with valid data #2', () => {
        is(data, 'year(21)').should.be.a.Boolean().and.be.false();
    });

    it('should work with valid data #3', () => {
        is(data, 'year(18)').should.be.a.Boolean().and.be.true();
    });

    it('should failed with invalid data range #1', () => {
        is(data, 'year(21, 30)').should.be.a.Boolean().and.be.false();
    });

    it('should failed with invalid data type #1', () => {
        is(data.toString(), 'year(18)').should.be.a.Boolean().and.be.false();
    });

    it('should failed with invalid data type #1', () => {
        is(2005, 'year(18)').should.be.a.Boolean().and.be.false();
    });

    it('should failed with invalid data type #2', () => {
        is([], 'year(18)').should.be.a.Boolean().and.be.false();
    });

    it('should failed with invalid data type #3', () => {
        is({}, 'year(18)').should.be.a.Boolean().and.be.false();
    });
});

