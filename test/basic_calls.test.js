var should = require('should');
var is = require('../index.js');


describe('prototype calls', () => {

    it('should work with basic', () => {
        is('foobar', 'alphanum').should.be.a.Boolean().and.be.true();
    });

    it('should fail with basic call', () => {
        is('foobar@', 'alphanum').should.be.a.Boolean().and.be.false();
    });

    it('should work with no filter', () => {
        is('foobar').should.be.a.Boolean().and.be.true();
    });

    /*it('should fail with basic call', () => {
        is.is = function () { return is.apply(this, arguments);}

        var data = 'foobar';
        is.is(data, 'alphanum').should.be.an.instanceOf(is).and.have.property('_data', data);
    });*/
});

