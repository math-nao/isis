
const checkers = require('./checkers');
const utils = require('./utils');
const util = require('util');
const debuglog = util.debuglog('saguaro');

function parseIs(data, filters) {
    
    if (typeof filters == 'function') {
        return filters(data) == true;
    }
    
    var 
        result = false,
        isNegate = false,
        filter,
        argsFilter,
        arrFilters = [];
    
    var lastPos = 0, nbOpenedBrackets = 0;
    for (var i = 0, strLength = filters.length; i < strLength; i++) {

        if (filters.charAt(i) === '(') {
            ++nbOpenedBrackets;
        }
        
        if (filters.charAt(i) === ')' && i > 1 && filters.charAt(i - 1) !== '\\') {
            --nbOpenedBrackets;
        }

        if ((filters.charAt(i + 1) === ',' && nbOpenedBrackets === 0) || i == strLength - 1) {
            arrFilters.push(filters.substring(lastPos, i + 1));
            lastPos = i + 2;
        }

    }

    arrFilters.some(function (v) {

        filter = v.trim().toLowerCase();
        argsFilter = [];

        if (v.indexOf('(') > -1) {
            filter = v.substring(0, v.indexOf('(')).trim();
            argsFilter = v.substring(v.indexOf('(') + 1, v.length - 1).trim().split(',');
        }
        
        isNegate = false;
        
        if (filter.charAt(0) === '!') {
            isNegate = true;
            filter = filter.substr(1);
        }
        
        result = typeof checkers[filter] != 'undefined' && checkers[filter].apply(this, [data, argsFilter]);

        debuglog('filter:%s, data:%s, result:%s', filter, data, result);

        if (isNegate) {
            result = !result;
        }

        return result === false;
    });
    
    return result;
};



function is(data, filters) {

    if (typeof filters != 'undefined') {
        return parseIs(data, filters);
    }

    return true;
}
    
is.prototype = checkers;

Object.keys(checkers).forEach(function (key) {
    is[key] = checkers[key];
});

module.exports = is;
