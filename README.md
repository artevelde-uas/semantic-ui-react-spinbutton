# Semantic UI React Spinbutton

[![](https://img.shields.io/npm/v/semantic-ui-react-spinbutton.svg)](https://www.npmjs.com/package/semantic-ui-react-spinbutton)
[![](https://img.shields.io/github/license/artevelde-uas/semantic-ui-react-spinbutton.svg)](https://spdx.org/licenses/ISC)
[![](https://img.shields.io/npm/dt/semantic-ui-react-spinbutton.svg)](https://www.npmjs.com/package/semantic-ui-react-spinbutton)

## Installation

Using NPM:

    npm install semantic-ui-react-spinbutton

or Yarn:

    yarn add semantic-ui-react-spinbutton

## Usage

```javascript
import { Spinbutton } from 'semantic-ui-react-spinbutton';

export default () => (
    <Spinbutton
        value='10'
        handleUp={value => (Number(value) + 1) || 0}
        handleDown={value => (Number(value) - 1) || 0}
        readOnly
    />
);
```
