
exports.upperCaseFirst = function (str) {
    return str.charAt(0).toUpperCase() + str.substr(1);
};

exports.getType = function (value) {
    return Object.prototype.toString.call(value);
};
