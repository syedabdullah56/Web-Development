console.log("HELLO WORLD");
var slugify = require('slugify')

slugify('I AM THE BEST SOFTWARE ENGINEER IN THE WORLD') // some-string

// if you prefer something other than '-' as separator
b=slugify('I AM THE BEST SOFTWARE ENGINEER IN THE WORLD', '_')  // some_string
console.log(b);