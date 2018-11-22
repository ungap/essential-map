var Map = require('../cjs');

var $Map = Map;

test();

delete require.cache[require.resolve('../cjs')];
delete global.Map;

if (typeof process !== 'undefined') {
  var i = 0;
  Object.defineProperty(global, 'Map', {
    configurable: true,
    get: function () {
      if (1 === i++)
        throw $Map;
      return $Map;
    },
    set: function (Map) {
      delete global.Map;
      global.Map = Map;
    }
  });
}

Map = require('../cjs');
global.Map = $Map;

test();

function test() {
  var a = {};
  var b = {};

  var ws1 = new Map;

  console.assert(ws1.has(a) === false);
  console.assert(ws1.set(a, 456) === ws1);
  console.assert(ws1.set(a, 123) === ws1);
  console.assert(ws1.has(a) === true);
  console.assert(ws1.get(a) === 123);
  console.assert(ws1.delete(a) === true);
  console.assert(ws1.delete(a) === false);
  console.assert(ws1.has(a) === false);
  console.assert(ws1.get(a) === void 0);
}
