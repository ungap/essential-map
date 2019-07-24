# Essential Map

[![Build Status](https://travis-ci.com/ungap/essential-map.svg?branch=master)](https://travis-ci.com/ungap/essential-map) [![Coverage Status](https://coveralls.io/repos/github/ungap/essential-map/badge.svg?branch=master)](https://coveralls.io/github/ungap/essential-map?branch=master) [![Greenkeeper badge](https://badges.greenkeeper.io/ungap/essential-map.svg)](https://greenkeeper.io/) ![WebReflection status](https://offline.report/status/webreflection.svg)

An essential [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map) poorlyfill for legacy browsers.

Only methods are `delete`, `forEach`, `get`, `has`, and `set`.

  * CDN via https://unpkg.com/@ungap/essential-map
  * ESM via `import Map from '@ungap/essential-map'`
  * CJS via `const Map = require('@ungap/essential-map')`

Compatible down to IE9, works well with ES5 shim upfront in IE8 (and maybe lower too).

[Live test](https://ungap.github.io/essential-map/test/)
