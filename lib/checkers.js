

exports.isObjEqual = function (obj1, obj2) {
	obj1=obj1||{};
	obj2=obj2||{};
	
	var result = false, currentResult = false;
	
	if (!$.objLength(obj1) && !$.objLength(obj2)) {
		result = true;
	}
	else{
		$.each(obj1, function (i) {
			if ($.isObject(obj1[i]) || $.isArray(obj1[i])) {
				currentResult=$.isObjEqual(obj1[i],obj2[i]);
			}
			else currentResult=obj1[i] === obj2[i];
		
			if (!currentResult) {
				result=false;
				return false;
			}
			else result=true;
		});
	}
	
	return result;
};

exports.is.emptyObj = function (obj) {
	return Object.keys(obj).length > 0;
};

exports.is.empty = function (data) {
	if (
	    (exports.isObject(data) && !exports.isEmptyObj(data))
	    ||
	    (exports.isArray(data) && data.length)
	    ||
	    (exports.isString(data) && data !== '')
	    ||
	    (exports.isNumber(data) && data !== 0 && !exports.isNaN(data))
	)
	    return false;
	
	return true;
};

exports.is.NaN = function (data) {
	return isNaN(data);
};

/*
 * Types
 */

exports.is.array = function (data) {
	return util.isArray(data);
};

exports.is.buffer = function (data) {
	return Buffer.isBuffer(data);
};

exports.is.object = function (data) {
	return Object.prototype.toString.call(data) === '[object Object]' || exports.isArgumentObject(data);
};

exports.is.argumentObject = function (data) {
	return Object.prototype.toString.call(data) === '[object Arguments]';
};

exports.is.boolean = function (data) {
	return typeof data == 'boolean';
};

exports.is.regExp = function (data) {
	return util.isRegExp(data);
};

exports.is.error = function (data) {
	return util.isError(data);
};

exports.is.function = function (value) {
	return typeof value == 'function';
};

exports.is.number = function (value) {
	return typeof value == 'number';
};

exports.is.positive = function (value) {
	return exports.isNumber(value) && value > 0;
};

exports.is.int = function (value) {
	return exports.isNumber(value) && (value % 1 == 0);
};

exports.is.float = function (value) {
	return exports.isNumber(value) && !exports.isInt(value);
};

exports.is.string = function (value) {
	return typeof value == 'string';
};

exports.is.alphanum = function (value) {
	return exports.isString(value) && /[a-f0-9]+/i.test(value);
};

exports.is.date = function (data) {
	return util.isDate(data);
};

exports.is.year = function (value, range) {
	
	if (!exports.isDate(value)) return false;
	
	var 
		result=false,
		diffYear = new Date().getFullYear() - value.getFullYear(),
		arrArgs=(range||'').match(/year\((.*?)\)/i);
	
	if (arrArgs) {
		arrArgs=(arrArgs[1]||'').split(',');
		if (arrArgs.length == 2) result=diffYear >= arrArgs[0]&&diffYear <= arrArgs[1];
		else result=diffYear >= arrArgs[0];
	}
	
	return result;
};

exports.is.between = exports.is.range = function (value, range) {
	
	if (typeof value == 'undefined') return false;
	
	var 
		result = false,
		arrArgs = (range||'').match(/range\((.*?)\)/i);
	
	if (arrArgs) {
		arrArgs = String(arrArgs[1]).split(',');
		if (arrArgs.length == 2) result = value >= arrArgs[0] && value <= arrArgs[1];
		else result = value >= arrArgs[0];
	}
	
	return result;
};

exports.is.in = function (value,inFields) {
	
	if (typeof value == 'undefined') return false;
	
	var 
		result=false,
		arrArgs=(inFields||'').match(/in\((.*?)\)/i);
	
	if (arrArgs) {
		arrArgs=(arrArgs[1]||'').split(',');
		result=~$.inArray(value,arrArgs) == 0?false:true;
	}
	
	return result;
};

exports.is.inArray = function (elem, array) {
	
	if (!array || !exports.isArray(array)) {
		return false;
	}
	
	return ~array.indexOf(elem);
};

exports.is.size = function (value, rangeLength) {
	
	if (typeof value == 'undefined') return false;
	
	var 
		result=false,
		arrArgs=String(rangeLength).match(/length\((.*?)\)/i);
	
	if (arrArgs) {
		arrArgs=String(arrArgs[1]).split(',');
		if (arrArgs.length == 2) result = value.length >= arrArgs[0]&&value.length <= arrArgs[1];
		else result = value.length == arrArgs[0];
	}
	
	return result;
};

exports.is.url = function (url) {
	//return check(url).isUrl();
	/* var urlInfo=urlLib.parse(url,false);
	if (urlInfo.protocol && urlInfo.hostname && urlInfo.pathname) return true;
	return false; */
	url=url.split('#')[0];
	return /^(?:(?:ht|f)tp(?:s?)\:\/\/|~\/|\/)?(?:\w+:\w+@)?((?:(?:[-\w\d{1-3}]+\.)+(?:com|org|net|gov|mil|biz|info|mobi|name|aero|jobs|edu|co\.uk|ac\.uk|it|fr|tv|museum|asia|local|travel|[a-z]{2}))|((\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)(\.(\b25[0-5]\b|\b[2][0-4][0-9]\b|\b[0-1]?[0-9]?[0-9]\b)) {3}))(?::[\d]{1,5})?(?:(?:(?:\/(?:[-\w~!$+|.,=]|%[a-f\d]{2})+)+|\/)+|\?|#)?(?:(?:\?(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)(?:&(?:[-\w~!$+|.,*:]|%[a-f\d{2}])+=?(?:[-\w~!$+|.,*:=]|%[a-f\d]{2})*)*)*(?:#(?:[-\w~!$ |\/.,*:;=]|%[a-f\d]{2})*)?$/i.test(url);
};

exports.is.email = function (email) {
	//return check(email).isEmail();
	return /^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)) {0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)) {0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.) {3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/.test(email);
};

exports.is.ip = function (ipAddress) {
	if (/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(ipAddress)) {
		var 
			result=true,
			currentResult=true,
			arrParts=ipAddress.split('.');
		$.each(arrParts, function (i,v) {
			if (v < 0 || v > 255) {
				currentResult=false;
			}
			result=result&&currentResult;
			if (!result) return false;
		});
		return result;
	}
	return false;
};

exports.is.creditCard = function (txt) {
	//return check(txt).isCreditCard();
	//Will work against Visa, MasterCard, American Express, Discover, Diners Club, and JCB card numbering formats
	txt=txt.replace(/[^0-9]+/g,''); //remove all dashes, spaces, etc.
	return /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(txt);
};

exports.is.json = function (str) {
	
	try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    
    return true;
};
