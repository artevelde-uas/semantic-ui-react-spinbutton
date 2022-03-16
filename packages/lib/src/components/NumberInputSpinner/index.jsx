import React, { useState } from 'react';
import classNames from 'classnames';

import InputSpinner from '../InputSpinner';

import styles from './index.module.css';


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
