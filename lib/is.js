
var checkers = require('./checkers'),
    utils = require('./utils');

function parseIs(data, filters) {
    
	if (typeof filters == 'function')
	    return filters(data) == true;
	
	var 
		result = false,
		isNegate = false,
		arrFilters = String(filters)
				    .split(/([a-z!]+(?:\([a-z0-9\-+\., ]+?\)|)?)/i)
				    .filter(function (element) {
					    return $.trim(element) !== '';
				    });
	
	arrFilters.forEach(function (v) {
		v = v.trim();
		isNegate = false;
		
		if (v.charAt(0) == '!') {
			isNegate = true;
			v = v.substr(1);
		}
		
		switch (v) {
			case 'function':
			case 'array':
			case 'object':
			case 'date':
			case 'boolean':
			case 'int':
			case 'number':
			case 'positive':
			case 'float':
			case 'alphaNum':
			case 'email':
			case 'url':
			case 'ip':
			case 'json':
				result = checkers['is' + utils.upperCaseFirst(v)](data);
				break;
			default:
				if (/^range/i.test(v) || /^length/i.test(v) || /^in/i.test(v) || /^year/i.test(v))
				    result=$.isYear(data,v);
				    result = checkers['is' + utils.upperCaseFirst(v)](data);
				break;
		}
		
		if (isNegate) result = !result;
		
		return result === true;
	});
	
	return result;
};



function is(data, filters) {
    if (!(this instanceof is))
        return new is(data, filters);
    
    if (typeof o != 'undefined')
        return parseIs(data, filters);
    
    return this;
}
    
is.prototype = utils;

module.exports = is;
