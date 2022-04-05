import React, { useEffect, useState } from 'react';
import classNames from 'classnames';

import InputSpinner from '../InputSpinner';

import styles from './index.module.css';


/**
 * @module NumberInputSpinner
 * 
 * @description An NumberInputSpinner is used to adjust the numeric value in an adjoining text box
 *              by either clicking on the up or down button, by scrolling the mouse wheel,
 *              or by pressing the up or down key, causing the value to increase or decrease.
 * 
 * @param {enum} [buttonPosition=right] - The position of the buttons <br>
 *        **Enums:** `wrapped` `top` `left` `right` `bottom`
 * @param {enum} [buttonOrientation=vertical] - The orientation of the buttons <br>
 *        **Enums:** `horizontal` `vertical`
 * @param {string} [buttonSize] - The size of the buttons
 * @param {string} [upIcon=caret up] - The icon on the 'up' button
 * @param {string} [downIcon=caret down] - The icon on the 'down' button
 * @param {function} [onUp] - Called on increasing the value
 * @param {function} [onDown] - Called on decreasing the value
 * @param {function} [onChange] - Called on changing the value
 * @param {function} [onWheel] - Called on turning the mouse wheel
 * @param {function} [onKeyDown] - Called on pressing a key
 * @param {string} [formatter] - A function to transform the value before displaying
 * @param {string} [className] - Additional classes
 * @param {boolean} [disabled] - A Spinbutton can show that it is disabled
 * @param {boolean} [upDisabled] - An 'up' button can show that it is disabled
 * @param {boolean} [downDisabled] - A 'down' button can show that it is disabled
 */
export default ({
    className,
    min,
    max,
    step = 1,
    shiftStep,
    ctrlStep,
    altStep,
    ...props
}) => {
    const [isMin, setMin] = useState(false);
    const [isMax, setMax] = useState(false);

    function setMinMax(value) {
        setMin(min && (value <= min));
        setMax(max && (value >= max));
    }

    // Determine min/max on first render
    useEffect(() => {
        setMinMax(props.value);
    }, []);

    // Merge class names
    className = classNames(
        className,
        styles.numberinputspinner,
    );

    // Get a language-sensitive number formatter
    const numberFormatter = new Intl.NumberFormat([], {
        useGrouping: false
    }).format;

    /** Determine the step value based on the modifier key pressed */
    function getStepValue(event) {
        if (shiftStep && event.shiftKey && !(event.ctrlKey || event.altKey)) {
            return shiftStep;
        } else if (ctrlStep && event.ctrlKey && !(event.shiftKey || event.altKey)) {
            return ctrlStep;
        } else if (altStep && event.altKey && !(event.shiftKey || event.ctrlKey)) {
            return altStep;
        } else {
            return step;
        }
    }

    function handleUp(value, event) {
        // Multiply and divide by 1000 before adding to prevent floating point rounding errors
        const newValue = (((Number(value) * 1000) + (Number(getStepValue(event)) * 1000)) / 1000) || 0;

        // Only allow values lower than `max` if specified
        setMinMax(newValue);

        if (!isMax) {
            return newValue;
        }
    }

    function handleDown(value, event) {
        // Multiply and divide by 1000 before substracting to prevent floating point rounding errors
        const newValue = (((Number(value) * 1000) - (Number(getStepValue(event)) * 1000)) / 1000) || 0;

        // Only allow values higher than `min` if specified
        setMinMax(newValue);

        if (!isMin) {
            return newValue;
        }
    }

    return (
        <InputSpinner {...props}
            className={className}
            onUp={handleUp}
            onDown={handleDown}
            upDisabled={isMax}
            downDisabled={isMin}
            formatter={numberFormatter}
        />
    );
}
