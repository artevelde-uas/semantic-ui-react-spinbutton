# Semantic UI React Spinbutton

[![npm](https://img.shields.io/npm/v/semantic-ui-react-spinbutton.svg)](https://www.npmjs.com/package/semantic-ui-react-spinbutton)
[![license](https://img.shields.io/github/license/artevelde-uas/semantic-ui-react-spinbutton.svg)](https://spdx.org/licenses/ISC)
[![downloads](https://img.shields.io/npm/dt/semantic-ui-react-spinbutton.svg)](https://www.npmjs.com/package/semantic-ui-react-spinbutton)

![Semantic UI logo](/docs/semantic-ui-logo.png)

Spinbutton controls for [Semantic UI React](https://react.semantic-ui.com/)

This package provides the following components:

- **`Spinbutton`**: A generic spinbutton component (just the *up* & *down* buttons)
- **`InputSpinner`**: A generic text input with spinbutton
- **`NumberInputSpinner`**: A number input with spinbutton

![Example image of numberInput](/docs/examples.png)

## Prerequisites

```json
    "react": "*",
    "react-dom": "*",
    "semantic-ui-react": "*"
```

## Installation

Using NPM:

```shell
npm install semantic-ui-react-spinbutton
```

or Yarn:

```shell
yarn add semantic-ui-react-spinbutton
```

## Demo

Clone the package and run `yarn start`

## Usage

```jsx
import { Spinbutton, InputSpinner, NumberInputSpinner } from 'semantic-ui-react-spinbutton';
import 'semantic-ui-react-spinbutton/dist/index.css';

export default () => (
    <div>
        <Spinbutton
            orientation='vertical'
            upIcon='caret up'
            downIcon='caret down'
            onUp={handleUp}
            onDown={handleDown}
            onWheel={handleWheel}
        />
        <InputSpinner
            buttonPosition='left'
            buttonOrientation='horizontal'
            onUp={handleUp}
            onDown={handleDown}
            onWheel={handleWheel}
            onKey={handleKey}
        />
        <NumberInputSpinner
            min='0'
            max='100'
            step='5'
            buttonPosition='wrapped'
            buttonOrientation='horizontal'
        />
    </div>
);
```

