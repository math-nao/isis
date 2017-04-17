var should = require('should');
var utils = require('../lib/utils.js');


describe('utils calls', () => {

    it('should work with ascii chars', () => {
        utils.upperCaseFirst('foobar').should.be.a.String().and.be.equal('Foobar');
    });

    it('should work with special chars #1', () => {
        utils.upperCaseFirst('@foobar').should.be.a.String().and.be.equal('@foobar');
    });

    it('should work with special chars #2', () => {
        utils.upperCaseFirst(' foobar').should.be.a.String().and.be.equal(' foobar');
    });
});

