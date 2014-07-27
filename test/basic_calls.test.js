var should = require('should');
var is = require('../index.js');

describe('IS', function() {
    
    describe('prototype calls', function() {

        it('should work with basic', function(done) {
            is('foobar', 'alphanum').should.be.a.Boolean.and.be.true;
            done();
        });

        it('should fail with basic call', function(done) {
            is('foobar@', 'alphanum').should.be.a.Boolean.and.be.false;
            done();
        });

        it('should work with no filter', function(done) {
            is('foobar').should.be.a.Boolean.and.be.true;
            done();
        });

        /*it('should fail with basic call', function(done) {
            is.is = function () { return is.apply(this, arguments);}

            var data = 'foobar';
            is.is(data, 'alphanum').should.be.an.instanceOf(is).and.have.property('_data', data);
            done();
        });*/
    });
});
