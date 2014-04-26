
var checkers = require('./checkers'),
    utils = require('./utils');

function parseIs(data, filters) {
    
	if (typeof filters == 'function')
	    return filters(data) == true;
	
	var 
		result = false,
		isNegate = false,
		filter,
		argsFilter,
		arrFilters = String(filters || '')
				    .split(/([a-z!]+(?:\([a-z0-9\-+\., ]+?\)|)?)/i)
				    .filter(function (element) {
					    return String(element).trim() !== '' && String(element).trim() !== ',';
				    });
	
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

		filter = filter === 'nan' ? 'NaN' : filter;
		
		result = typeof checkers[filter] != 'undefined' && checkers[filter].apply(this, [data, argsFilter]);

		if (isNegate)
			result = !result;
		
		return result === false;
	});
	
	return result;
};



function is(data, filters) {
    //if (!(this instanceof is))
    //    return new is(data, filters);
    
    if (typeof filters != 'undefined')
        return parseIs(data, filters);
    
    this._data = data;

    return this;
}
    
is.prototype = checkers;

module.exports = is;
