
var util = require('util'),
	urlLib = require('url');

exports.objEqual = function (obj1, obj2) {
	obj1 = obj1 || {};
	obj2 = obj2 || {};
	
	var result = false, currentResult = false;
	
	if (!$.objLength(obj1) && !$.objLength(obj2)) {
		result = true;
	}
	else{
		$.each(obj1, function (i) {
			if ($.isObject(obj1[i]) || $.isArray(obj1[i])) {
				currentResult = $.isObjEqual(obj1[i], obj2[i]);
			}
			else currentResult = obj1[i] === obj2[i];
		
			if (!currentResult) {
				result = false;
				return false;
			}
			else result = true;
		});
	}
	
	return result;
};

/*
 * Types
 */

exports.NaN = function (value) {
	//return isNaN(value);
	return Number.isNaN(value);
};

exports.array = function (value) {
	return util.isArray(value);
};

exports.buffer = function (value) {
	return Buffer.isBuffer(value);
};

exports.object = function (value) {
	return Object.prototype.toString.call(value) === '[object Object]' || exports.arg_object(value);
};

exports.arg_object = function (value) {
	return Object.prototype.toString.call(value) === '[object Arguments]';
};

exports.boolean = function (value) {
	return typeof value == 'boolean';
};

exports.regexp = function (value) {
	return util.isRegExp(value);
};

exports.error = function (value) {
	return util.isError(value);
};

exports.function = function (value) {
	return typeof value == 'function';
};

exports.string = function (value) {
	return typeof value == 'string';
};

exports.date = function (value) {
	return util.isDate(value);
};

exports.number = function (value) {
	return typeof value == 'number' && !exports.NaN(value);
};

exports.positive = function (value) {
	// zero is neither positive nor negative
	return exports.number(value) && value > 0;
};

exports.negative = function (value) {
	// zero is neither positive nor negative
	return exports.number(value) && value < 0;
};

exports.integer = exports.int = function (value) {
	//return Number.isInteger(value);
	return exports.number(value) && (value % 1 == 0);
};

exports.float = function (value) {
	return exports.number(value) && !exports.integer(value);
};

exports.hexa = function (value) {
	return (exports.string(value) || exports.number(value)) && /^[a-f0-9]+$/i.test(value);
};

exports.alphanum = function (value) {
	return exports.string(value) && /^[a-z0-9]+$/i.test(value);
};

exports.exist = function (value) {
	return typeof value !== "undefined" && value !== null;
};

exports.equal = exports.exactly = function (value, args) {
	return (exports.number(value) || (exports.string(value) && !exports.empty(value))) && value == args[0];
};

exports.above = exports.greaterThan = function (value, args) {
	return (exports.number(value) || (exports.string(value) && !exports.empty(value))) && value > parseFloat(args[0]);
};

exports.least = function (value, args) {
	return exports.equal(value, args) || exports.above(value, args);
};

exports.below = exports.lessThan = function (value, args) {
	return (exports.number(value) || (exports.string(value) && !exports.empty(value))) && value < parseFloat(args[0]);
};

exports.most = function (value, args) {
	return exports.equal(value, args) || exports.below(value, args);
};

exports.contain = function (value, args) {
	return (exports.number(value) || exports.string(value)) && String(value).indexOf(args[0].replace('\\', '')) > -1;
};

exports.empty = function (value) {
	if (
	    (exports.object(value) && !Object.keys(value).length)
	    ||
	    (exports.array(value) && !value.length)
	    ||
	    (exports.string(value) && !value.length)
	    ||
	    value == null
	)
	    return true;
	
	return false;
};

exports.match = function (value, args, flags) {
	flags = flags || '';
	return new RegExp(args[0], flags).test(String(value));
};

exports.imatch = function (value, args) {
	return exports.match(value, args, 'i');
};

exports.year = function (value, args) {
	
	if (!exports.date(value))
		return false;

	var diff = new Date().getFullYear() - value.getFullYear()

	if (args.length >= 2)
		return exports.within(diff, args);

	return exports.least(diff, args);
};

exports.within = exports.between = exports.range = function (value, args) {
	return exports.least(value, [args[0]]) && exports.most(value, [args[1]]);
};

exports.key = function (value, args) {
	
	if (!exports.object(value))
		return false;

	return exports.include(Object.keys(value), args);
};

exports.include = function (value, args, some) {
	some = some || false;
	
	if (!args || !exports.array(args) || (!exports.array(value) && !exports.number(value) && !exports.string(value))) {
		return false;
	}

	var method = some ? 'some' : 'every';
	
	if (exports.array(value)) {
		
		return args[method](function (v) {
			
			for (var i = 0, arrLength = value.length; i < arrLength; i++) {
				if (value[i] == v)
					return true;
			}

			return false;
		});

	}
	else if (exports.number(value))
		value = String(value);

	return args[method](function (v) {
		return value.indexOf(v) > -1;
	});
};

exports.in = function (value, args) {
	return (exports.number(value) || exports.string(value)) && exports.include(value, args, true);
};

exports.length = exports.size = function (value, args) {
	
	if (typeof value == 'undefined')
		return false;
	
	var data;
	if (exports.object(value))
		data = Object.keys(value).length;
	else if (exports.array(value))
		data = value.length;
	else if (exports.string(value))
		data = value.length;
	else
		return false;

	if (args.length == 2) 
		return exports.within(data, args);
	
	return exports.equal(data, [args[0]]);
};

exports.url = function (value) {
	
	if (!exports.string(value))
		return false;

	var urlInfo = urlLib.parse(value);
	
	return !exports.empty(urlInfo.protocol) && !exports.empty(urlInfo.hostname) && !exports.empty(urlInfo.pathname);
};

exports.email = function (value) {
	return /^[a-z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+(?:[A-Z]{2}|com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|museum)\b/i.test(value);
};

exports.ip = function (value) {
	
	if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value)) {
		
		var result = true, currentResult = true, arrParts = value.split('.');
		
		arrParts.some(function (part) {
			if (part < 0 || part > 255)
				currentResult=false;
			
			result = result && currentResult;
			
			if (!result)
				return true;
		});

		return result;
	}

	return false;
};

exports.creditcard = function (value) {
	// http://www.regular-expressions.info/creditcard.html
	// All Visa card numbers start with a 4. New cards have 16 digits. Old cards have 13.
	// All MasterCard numbers start with the numbers 51 through 55. All have 16 digits.
	// American Express card numbers start with 34 or 37 and have 15 digits.
	// Diners Club card numbers begin with 300 through 305, 36 or 38. All have 14 digits. There are Diners Club cards that begin with 5 and have 16 digits. These are a joint venture between Diners Club and MasterCard, and should be processed like a MasterCard.
	// Discover card numbers begin with 6011 or 65. All have 16 digits.
	// JCB cards beginning with 2131 or 1800 have 15 digits. JCB cards beginning with 35 have 16 digits.
	
	if (!exports.string(value) && !exports.number(value))
		return false;

	value = String(value).replace(/[^0-9]+/g, '');
	
	return /^4[0-9]{12}(?:[0-9]{3})?$/.test(value) // Visa
		|| /^5[1-5][0-9]{14}$/.test(value) // MasterCard
		|| /^3[47][0-9]{13}$/.test(value) // American Express
		|| /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/.test(value) // Diner Club
		|| /^6(?:011|5[0-9]{2})[0-9]{12}$/.test(value) // Discover
		|| /^(?:2131|1800|35\d{3})\d{11}$/.test(value); // JCB

};

exports.json = function (value) {
	
	if (!exports.string(value))
		return false;
	
	try {
        JSON.parse(value);
    }
    catch (e) {
        return false;
    }
    
    return true;
};

exports.lat = function (value) {
	return exports.within(value, [-90, 90]);
};

exports.lng = function (value) {
	return exports.within(value, [-180, 180]);
};

