var should = require('should');
var utils = require('../lib/utils.js');

describe('IS', function() {
    
    describe('utils calls', function() {

        it('should work with ascii chars', function(done) {
            utils.upperCaseFirst('foobar').should.be.a.String.and.be.equal('Foobar');
            done();
        });

        it('should work with special chars #1', function(done) {
            utils.upperCaseFirst('@foobar').should.be.a.String.and.be.equal('@foobar');
            done();
        });

        it('should work with special chars #2', function(done) {
            utils.upperCaseFirst(' foobar').should.be.a.String.and.be.equal(' foobar');
            done();
        });
    });
});
