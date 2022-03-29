const doc = require('mkdoc');
const abs = require('mkabs');
const out = require('mkout');
const { createWriteStream } = require('fs');


// Copy the generated README.md to the lib folder
doc('../../README.md')
    // Convert relative URLs to absolute URLs
    .pipe(abs({
        base: 'https://github.com/artevelde-uas/semantic-ui-react-spinbutton',
        images: true,
        imageBase: 'https://raw.githubusercontent.com/artevelde-uas/semantic-ui-react-spinbutton/master'
    }))
    .pipe(out())
    .pipe(createWriteStream('../lib/README.md'));
