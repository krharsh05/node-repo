var _ = require('underscore');

//www.underscorejs.org/#contains
//How module resolutionn happens in node ? Steps below
// Treats as Core Module
// File or folder
// node_modules

var result = _.contains([1, 2, 3, 4, 5], 5);
console.log(result);