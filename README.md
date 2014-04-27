# Isis [![Build Status](https://secure.travis-ci.org/math-nao/isis.png)](http://travis-ci.org/math-nao/isis)

A simple framework for data validation.

## Installation

```
  npm install isis
```

## Assertions

### above(num)
Assert numeric value above the given value (`> num`):

``` js
    var is = require('isis');
    
    is(3, 'above(1)') => true
    is(1, 'above(1)') => false
```

### alphanum
Assert that a string value contains alphanumerical characters (`[0-9a-zA-Z]`):

``` js
    var is = require('isis');
    
    is('123az', 'alphanum') => true
    is('123az@', 'alphanum') => false
```

### arg_object
Assert that an object is an `arguments`:

``` js
    var is = require('isis');
    (function () {
        is(arguments, 'arg_object') => true
        is({}, 'arg_object') => false
    })();
```

### array
Assert that an object is an `Array`:

``` js
    var is = require('isis');
    is([], 'array') => true
    is({}, 'array') => false
```

### below
Assert that a number is below than a value  (`< num`):

``` js
    var is = require('isis');
    is(3, 'below(4)') => true
    is(4, 'below(4)') => false
```

### boolean
Assert that an object is a boolean:

``` js
    var is = require('isis');
    is(true, 'boolean') => true
    is(1, 'boolean') => false
```

## Run Tests
Tests are given complete coverage of all features.

``` bash
  $ npm test
```


## License

MIT

