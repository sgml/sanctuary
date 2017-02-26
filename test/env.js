'use strict';

var $ = require('sanctuary-def');

var S = require('..');

var eq = require('./internal/eq');


//  Type :: Type
var Type = $.NullaryType(
  'sanctuary/Type',
  '',
  function(x) { return S.type(x) === 'sanctuary-def/Type'; }
);

test('env', function() {

  eq(typeof S.env, 'object');
  eq($.test([], $.Array(Type), S.env), true);

});
