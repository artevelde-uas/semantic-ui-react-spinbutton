import React from 'react';
import classNames from 'classnames';

import InputSpinner from '../InputSpinner';

import styles from './index.module.css';


export default ({
    className,
    min,
    max,
    step = 1,
    shiftStep = 1,
    ctrlStep = 1,
    altStep = 1,
    ...props
}) => {
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
        if (event.shiftKey && !(event.ctrlKey || event.altKey)) {
            return shiftStep;
        } else if (event.ctrlKey && !(event.shiftKey || event.altKey)) {
            return ctrlStep;
        } else if (event.altKey && !(event.shiftKey || event.ctrlKey)) {
            return altStep;
        } else {
            return step;
        }
    }

    function handleUp(value, event) {
        // Multiply and divide by 1000 before adding to prevent floating point rounding errors
        const newValue = (((Number(value) * 1000) + (Number(getStepValue(event)) * 1000)) / 1000) || 0;

        // Don't return a valu lower than `min` if specified
        return max ? Math.min(max, newValue) : newValue;
    }
    
    function handleDown(value, event) {
        // Multiply and divide by 1000 before substracting to prevent floating point rounding errors
        const newValue = (((Number(value) * 1000) - (Number(getStepValue(event)) * 1000)) / 1000) || 0;
        
        // Don't return a valu higher than `max` if specified
        return min ? Math.max(min, newValue) : newValue;
    }

    return (
        <InputSpinner {...props}
            className={className}
            onUp={handleUp}
            onDown={handleDown}
            formatter={numberFormatter}
        />
    );
}
