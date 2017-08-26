# Object.prototype.hashCode

A prototype for an object to calculate its hashCode.

## Usage

```
import './auto'

var obj = {a: '1', b: '2'}
var hashCode = obj.hashCode()
```

or

```
import hashCode from './index'

var obj = {a: '1', b: '2'}
var hashCode = hashCode(obj)
```

## How to calculate

1> serialize an object by its keys to be a string

For example, `{a: 1, b: 2}` and `{b: 2, a: 1}` will both be converted to string `[{key:'a',value:1},{key:'b',value:2}]`.

2> calculate the string's hash code

When we get the serialized string, we use this string to calculate a hash code.

3> how to resolve function/regexp?

Then will be treated as string, so a function `function(a) { return a }` will be same if they has same content.

*As you known, when a function connect with a string, the function will be converted to be string first.*

## Examples

```
// 1. compare two objects

var a = {key1: 10, key2: 20}
var b = {key2: 20, key1: 10}

if (hashCode(a) === hashCode(b)) {
  // ...
}

// 2. cache by object key
// ...
var url = '...'
var data = {key1: 1, key2: 2}
var hash = hashCode({url, data})
if (cache[hash] - Date.now() < -2000) {
  fetch(url, data).then(res => res.json()).then(data => {
    cache[hash] = Date.now()
    // ...
  })
}
```
