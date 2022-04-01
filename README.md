# Semantic UI React Spinbutton

[![npm](https://img.shields.io/npm/v/semantic-ui-react-spinbutton.svg)](https://www.npmjs.com/package/semantic-ui-react-spinbutton)
[![license](https://img.shields.io/github/license/artevelde-uas/semantic-ui-react-spinbutton.svg)](https://spdx.org/licenses/ISC)
[![downloads](https://img.shields.io/npm/dt/semantic-ui-react-spinbutton.svg)](https://www.npmjs.com/package/semantic-ui-react-spinbutton)

![Semantic UI logo](/docs/semantic-ui-logo.png)

Spinbutton controls for [Semantic UI React](https://react.semantic-ui.com/)

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

### Examples

![Example image of numberInput](/docs/examples.png)

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

## Modules

<dl>
<dt><a href="#module_InputSpinner">InputSpinner</a></dt>
<dd><p>An InputSpinner is used to adjust a value in an adjoining text box
             by either clicking on the up or down button, by scrolling the mouse wheel,
             or by pressing the up or down key, causing the value to change</p>
</dd>
<dt><a href="#module_NumberInputSpinner">NumberInputSpinner</a></dt>
<dd><p>An NumberInputSpinner is used to adjust the numeric value in an adjoining text box
             by either clicking on the up or down button, by scrolling the mouse wheel,
             or by pressing the up or down key, causing the value to increase or decrease.</p>
</dd>
<dt><a href="#module_Spinbutton">Spinbutton</a></dt>
<dd><p>A Spinbutton is used to adjust a value by either clicking on the up or down button,
             or by scrolling the mouse wheel, causing the value to change</p>
</dd>
</dl>

<a name="module_InputSpinner"></a>

## InputSpinner

An InputSpinner is used to adjust a value in an adjoining text box
by either clicking on the up or down button, by scrolling the mouse wheel,
or by pressing the up or down key, causing the value to change

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [buttonPosition] | <code>enum</code> | <code>right</code> | The position of the buttons <br>        **Enums:** `wrapped` `top` `left` `right` `bottom` |
| [buttonOrientation] | <code>enum</code> | <code>vertical</code> | The orientation of the buttons <br>        **Enums:** `horizontal` `vertical` |
| [buttonSize] | <code>string</code> |  | The size of the buttons |
| [upIcon] | <code>string</code> | <code>"caret up"</code> | The icon on the 'up' button |
| [downIcon] | <code>string</code> | <code>"caret down"</code> | The icon on the 'down' button |
| [onUp] | <code>function</code> |  | Called on increasing the value |
| [onDown] | <code>function</code> |  | Called on decreasing the value |
| [onChange] | <code>function</code> |  | Called on changing the value |
| [onWheel] | <code>function</code> |  | Called on turning the mouse wheel |
| [onKeyDown] | <code>function</code> |  | Called on pressing a key |
| [formatter] | <code>string</code> |  | A function to transform the value before displaying |
| [className] | <code>string</code> |  | Additional classes |
| [disabled] | <code>boolean</code> |  | A Spinbutton can show that it is disabled |
| [upDisabled] | <code>boolean</code> |  | An 'up' button can show that it is disabled |
| [downDisabled] | <code>boolean</code> |  | A 'down' button can show that it is disabled |

<a name="module_NumberInputSpinner"></a>

## NumberInputSpinner

An NumberInputSpinner is used to adjust the numeric value in an adjoining text box
by either clicking on the up or down button, by scrolling the mouse wheel,
or by pressing the up or down key, causing the value to increase or decrease.

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [buttonPosition] | <code>enum</code> | <code>right</code> | The position of the buttons <br>        **Enums:** `wrapped` `top` `left` `right` `bottom` |
| [buttonOrientation] | <code>enum</code> | <code>vertical</code> | The orientation of the buttons <br>        **Enums:** `horizontal` `vertical` |
| [buttonSize] | <code>string</code> |  | The size of the buttons |
| [upIcon] | <code>string</code> | <code>"caret up"</code> | The icon on the 'up' button |
| [downIcon] | <code>string</code> | <code>"caret down"</code> | The icon on the 'down' button |
| [onUp] | <code>function</code> |  | Called on increasing the value |
| [onDown] | <code>function</code> |  | Called on decreasing the value |
| [onChange] | <code>function</code> |  | Called on changing the value |
| [onWheel] | <code>function</code> |  | Called on turning the mouse wheel |
| [onKeyDown] | <code>function</code> |  | Called on pressing a key |
| [formatter] | <code>string</code> |  | A function to transform the value before displaying |
| [className] | <code>string</code> |  | Additional classes |
| [disabled] | <code>boolean</code> |  | A Spinbutton can show that it is disabled |
| [upDisabled] | <code>boolean</code> |  | An 'up' button can show that it is disabled |
| [downDisabled] | <code>boolean</code> |  | A 'down' button can show that it is disabled |

<a name="module_NumberInputSpinner..getStepValue"></a>

### NumberInputSpinner~getStepValue()

Determine the step value based on the modifier key pressed

**Kind**: inner method of [<code>NumberInputSpinner</code>](#module_NumberInputSpinner)\
<a name="module_Spinbutton"></a>

## Spinbutton

A Spinbutton is used to adjust a value by either clicking on the up or down button,
or by scrolling the mouse wheel, causing the value to change

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [buttonPosition] | <code>enum</code> | <code>wrapped</code> | The position of the buttons <br>        **Enums:** `wrapped` `top` `left` `right` `bottom` |
| [buttonOrientation] | <code>enum</code> | <code>vertical</code> | The orientation of the buttons <br>        **Enums:** `horizontal` `vertical` |
| [buttonSize] | <code>string</code> |  | The size of the buttons |
| [upIcon] | <code>string</code> | <code>"caret up"</code> | The icon on the 'up' button |
| [downIcon] | <code>string</code> | <code>"caret down"</code> | The icon on the 'down' button |
| [onUp] | <code>function</code> |  | Called on increasing the value |
| [onDown] | <code>function</code> |  | Called on decreasing the value |
| [onWheel] | <code>function</code> |  | Called on turning the mouse wheel |
| [className] | <code>string</code> |  | Additional classes |
| [disabled] | <code>boolean</code> |  | A Spinbutton can show that it is disabled |
| [upDisabled] | <code>boolean</code> |  | An 'up' button can show that it is disabled |
| [downDisabled] | <code>boolean</code> |  | A 'down' button can show that it is disabled |

