import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'semantic-ui-react';
import classNames from 'classnames';

import InputSpinner from '../InputSpinner';

import styles from './index.module.css';


export default ({
    className,
    min,
    max,
    step = 1,
    ...props
}) => {
    // Merge class names
    className = classNames(
        className,
        styles.numberinputspinner,
    );

    // Get a language-sensitive number formatter
    const numberFormatter = new Intl.NumberFormat().format;

    function upHandler(value, event) {
        const newValue = (Number(value) + Number(step)) || 0;

        return max ? Math.min(max, newValue) : newValue;
    }

    function downHandler(value, event) {
        const newValue = (Number(value) - Number(step)) || 0;

        return min ? Math.max(min, newValue) : newValue;
    }

    function changeHandler(value, event) {
        return Math.trunc(value) || 0;
    }

    return (
        <InputSpinner {...props}
            className={className}
            onUp={upHandler}
            onDown={downHandler}
            onChange={changeHandler}
            formatter={numberFormatter}
        />
    );
}
