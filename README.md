# Array to String with Indentation

[![Build Status](https://travis-ci.org/essenmitsosse/***MODULE-NAME***.svg)](https://travis-ci.org/essenmitsosse/***MODULE-NAME***) [![Coverage Status](https://coveralls.io/repos/github/essenmitsosse/***MODULE-NAME***/badge.svg)](https://coveralls.io/github/essenmitsosse/***MODULE-NAME***) [![Dependency Status](https://david-dm.org/essenmitsosse/***MODULE-NAME***.svg)](https://david-dm.org/essenmitsosse/***MODULE-NAME***)

Converts a multidimensional array to a string with indentation for each array level

# Usage

```javascript
var arrayToString = require( "array-to-string-with-indentation" );

arrayToString( [ "foo", "bar", [ "indent1", "indent2",[ "indentindent1" ], "indent3" ] ] );
/* returns:
foo
bar
    indent1
    indent2
        indentindent1
    indent3
*/
```
