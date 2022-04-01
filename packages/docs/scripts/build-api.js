const jsdoc2md = require('jsdoc-to-markdown');
const { writeFileSync } = require('fs');

// Build the API documentation from the JSX source files
jsdoc2md.render({ files: '../lib/src/**/*.jsx' }).then(value => {
    writeFileSync('./build/api.md', value);
});
