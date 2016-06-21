# Saguaro [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url] [![Test coverage][coveralls-image]][coveralls-url] [![License][license-image]][license-url]

![saguaro picture][picture1]

A simple framework for data validation.

## Installation

```
  npm install saguaro
```

## Assertion call

All assertions can be called in two way: constructor call or method call.
With method calls, assertion parameters need to be passed within an array.

``` js
    var is = require('saguaro');

    is('foobar', 'alphanum') => true
    is.alphanum('foobar') => true

    is('foobar', 'contain(foobar)') => true
    is.contain('foobar', ['foobar']) => true

    is(2, 'within(1, 3)') => true
    is.within(2, [1, 3]) => true
```

## Multiple assertions

All assertions can be combined in one call. Assert fail if one of them fail.

``` js
    var is = require('saguaro');

    is('529419940a585fb2a83765b2ca5cc091', 'string,length(32),hexa') => true
    is('529419940a585fb2a83765b2ca5cc091', 'string,length(31),hexa') => false
```

## Assert and negation

Negation of any assertion is supported by the `!` char.

``` js
    var is = require('saguaro');

    is({}, '!number') => true
```

## Assertion list


### above(num), greaterThan(num)

Asserts that the string|number target is above the given value (`> num`).

``` js
    var is = require('saguaro');
    
    is(3, 'above(1)') => true
    is(1, 'above(1)') => false
```

### alphanum

Asserts that the string|number target contains alphanumerical characters (`[0-9a-zA-Z]`).

``` js
    var is = require('saguaro');
    
    is('123Az', 'alphanum') => true
    is('123Az@', 'alphanum') => false
```

### arguments

Asserts that the target is an `Arguments` object.

``` js
    var is = require('saguaro');

    (function () {
        is(arguments, 'arguments') => true
        is({}, 'arguments') => false
    })();
```

### array

Asserts that the target is an `Array`.

``` js
    var is = require('saguaro');

    is([], 'array') => true
    is({}, 'array') => false
```

### below(num), lessThan(num)

Asserts that the string|number target is below than the given value (`< num`).

``` js
    var is = require('saguaro');

    is(3, 'below(4)') => true
    is(4, 'below(4)') => false
```

### boolean

Asserts that the target is a `Boolean`.

``` js
    var is = require('saguaro');

    is(true, 'boolean') => true
    is(1, 'boolean') => false
```

### buffer

Asserts that the target is a `Buffer`.

``` js
    var is = require('saguaro');

    is(new Buffer(1234), 'buffer') => true
    is({}, 'buffer') => false
```

### contain(str)

Asserts that the string target contains another string.

``` js
    var is = require('saguaro');

    is('- foobar -', 'contain(foobar)') => true
    is('- foobar -', 'contain(foobar1)') => false
```

### creditcard

Asserts that the string target is a credit card number (Visa, MasterCard, American Express, Diner Club, Discover, JCB).

``` js
    var is = require('saguaro');

    is(/* A valid credit card number */, 'creditcard') => true
    is('foobar', 'creditcard') => false
```

### date

Asserts that the target is a `Date`.

``` js
    var is = require('saguaro');

    is(new Date(), 'date') => true
    is(1, 'date') => false
```

### email

Asserts that the string target is an email.

``` js
    var is = require('saguaro');

    is('johndoe@example.com', 'email') => true
    is('johndoe-example.com', 'email') => false
```

### empty

Asserts that the target is empty.

``` js
    var is = require('saguaro');

    is('', 'empty') => true
    is([], 'empty') => true
    is({}, 'empty') => true
    is(null, 'empty') => true
    is(0, 'empty') => false
```

### equal(value), exactly(value)

Asserts that the target is equal to the given `value`.

``` js
    var is = require('saguaro');

    is(1.01, 'equal(1.01)') => true
    is('foobar', 'equal(foobar)') => true
    is('-foobar', 'equal(foobar)') => false
```

### error

Asserts that the target is an `Error`.

``` js
    var is = require('saguaro');

    is(new Error(), 'error') => true
    is(new TypeError(), 'error') => true
    is({ name: 'Error', message: 'an error occurred' }, 'error') => false
```

### exist

Asserts that the target is not `undefined` or `null`.

``` js
    var is = require('saguaro');

    is(0, 'exist') => true
    is('', 'exist') => true
    is(null, 'exist') => false
    is(undefined, 'exist') => false
```

### float

Asserts that the number target is a `Float`.

``` js
    var is = require('saguaro');

    is(1.01, 'float') => true
    is(1, 'float') => false
```

### function

Asserts that the target is a `Function`.

``` js
    var is = require('saguaro');

    is(function () {}, 'function') => true
    is(1, 'function') => false
```

### hexa

Asserts that the string|number target is an hexadecimal (`[0-9a-fA-F]`).

``` js
    var is = require('saguaro');

    is('0123456789aBcdef', 'hexa') => true
    is(123456789, 'hexa') => true
    is('foobar', 'hexa') => false
```

### imatch(value)

Asserts that the target matches a case insensitive regular expression.

``` js
    var is = require('saguaro');

    is('- FooBar -', 'imatch(\\bfoo[a-z]{3})') => true
    is('foo', 'imatch(foobar)') => false
```

### in(value1, value2 ..., valueN)

Asserts that the strin|number|array target matches at least one element in `value` list.

``` js
    var is = require('saguaro');

    is(1, 'in(1, 2)') => true
    is('foo', 'in(foo, bar)') => true
    is(3, 'in(1, 2)') => false
    is([1, 2, 3], 'in(3, 4, 5)') => true
    is([1, 2, 3], 'in(4, 5)') => false
```

### include(value1, value2 ..., valueN)

Asserts that the target include all elements in `value` list.

``` js
    var is = require('saguaro');

    is([1, 2, 3], 'include(2)') => true
    is([1, 2, 3], 'include(2, 3)') => true
    is([1, 3], 'include(2)') => false
```

### integer, int

Asserts that the target is an `Integer`.

``` js
    var is = require('saguaro');

    is(1, 'integer') => true
    is(1.01, 'integer') => false
```

### ip

Asserts that the target is an ip.

``` js
    var is = require('saguaro');

    is('255.255.255.255', 'ip') => true
    is('256.255.255.255', 'ip') => false
```

### json

Asserts that the target is a JSON notation.

``` js
    var is = require('saguaro');

    is('{ "foo": "bar" }', 'json') => true
    is('foobar', 'json') => false
```

### key(value)

Asserts that the object target has the key `value`.

``` js
    var is = require('saguaro');

    is({ 'foo': 'bar' }, 'key(foo)') => true
    is({}, 'key(toString)') => false
```

### lat

Asserts that the number|string target is a latitude value.

``` js
    var is = require('saguaro');

    is(37.4418834, 'lat') => true
    is(90.01, 'lat') => false
```

### least(value)

Asserts that the number|string target is greater than or equal to the given value (`>= num`).

``` js
    var is = require('saguaro');

    is(1, 'least(1)') => true
    is(0.9, 'least(1)') => false
```

### length(min, max), size(min, max)

Asserts that the number|string target is within a range or equal to the given value `min`.

``` js
    var is = require('saguaro');

    is('foobar', 'length(6)') => true
    is('foobar', 'length(4, 6)') => true
    is(['foo', 'bar'], 'length(1, 2)') => true
    is({ 'foo': 'bar' }, 'length(1, 2)') => true
    is('foobar', 'length(1)') => false
```

### lng

Asserts that the number|string target is a longitude value.

``` js
    var is = require('saguaro');

    is(-122.1430195, 'lng') => true
     is(180.01, 'lng') => false
```

### match(str)

Asserts that the number|string target matches a regular expression.

``` js
    var is = require('saguaro');

    is('- fooBar -', 'match(\\bfoo[a-z]{3})') => true
    is('Foo', 'match(foo)') => false
```

### most(num)

Asserts that the number target is less than or equal to the given value (`<= num`).

``` js
    var is = require('saguaro');

    is(1, 'most(1)') => true
    is(1.1, 'most(1)') => false
```

### NaN

Asserts that the target is an illegal number (`NaN`).

``` js
    var is = require('saguaro');

    is(0 / 0, 'NaN') => true
    is(1, 'NaN') => false
```

### negative

Asserts that the number target is a negative `Number`.

``` js
    var is = require('saguaro');

    is(-1, 'negative') => true
    is(0, 'negative') => false
```

### number

Asserts that the target is a `Number`.

``` js
    var is = require('saguaro');

    is(123, 'number') => true
    is('foobar', 'number') => false
```

### object

Asserts that the target is an `Object`.

``` js
    var is = require('saguaro');

    is({}, 'object') => true
    is([], 'object') => false
```

### positive

Asserts that the number target is a positive `Number`.

``` js
    var is = require('saguaro');

    is(1, 'positive') => true
    is(0, 'positive') => false
```

### regexp

Asserts that the target is a regular expression.

``` js
    var is = require('saguaro');

    is(/foobar/, 'regexp') => true
    is(1, 'regexp') => false
```

### string

Asserts that the target is a `String`.

``` js
    var is = require('saguaro');

    is('foobar', 'string') => true
    is(1, 'string') => false
```

### url

Asserts that the target is an url (valid protocol, hostname and pathname).

``` js
    var is = require('saguaro');

    is('http://foo.bar:8080/some/uri', 'url') => true
    is('foobar', 'url') => false
```

### within(from, to), between(from, to), range(from, to)

Asserts that the string|number target is within a range (inclusive).

``` js
    var is = require('saguaro');

    is(2, 'within(2, 3)') => true
    is(1, 'within(2, 3)') => false
```

### year(value), year(min, max)

Asserts that the year of the date target is greater than or equal to `value` or within a range (inclusive).

``` js
    var is = require('saguaro');

    var data = new Date();
    data.setFullYear(data.getFullYear() - 19);

    is(data, 'year(19)') => true
    is(data, 'year(18)') => true
    is(data, 'year(18,21)') => true
    is(data, 'year(21)') => false
```

## Run Tests

Tests are given complete coverage of all features.

``` bash
  $ npm test
```


## License

MIT

[npm-image]: https://img.shields.io/npm/v/saguaro.svg?style=flat
[npm-url]: https://npmjs.org/package/saguaro
[travis-image]: https://img.shields.io/travis/math-nao/saguaro/1.0.1.svg?style=flat
[travis-url]: https://travis-ci.org/math-nao/saguaro
[coveralls-image]: https://img.shields.io/coveralls/math-nao/saguaro.svg?style=flat
[coveralls-url]: https://coveralls.io/r/math-nao/saguaro?branch=1.0.1
[license-image]: http://img.shields.io/npm/l/saguaro.svg?style=flat
[license-url]: https://github.com/math-nao/saguaro/blob/1.0.1/LICENSE

[picture1]: https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/Saguaro_National_Park_Panorama_and_Mountains.jpeg/1024px-Saguaro_National_Park_Panorama_and_Mountains.jpeg
