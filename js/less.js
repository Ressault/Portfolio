$(document).ready()
var less = require('less');

less.render('.class { width: (1 + 1) }',
    {
      paths: ['.', './lib'],  // Specify search paths for @import directives
      filename: 'less/_variables.less', // Specify a filename, for better error messages
      compress: false          // Minify CSS output
    },
    function (e, output) {
       console.log(output.css);
    });