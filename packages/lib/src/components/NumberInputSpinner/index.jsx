import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'semantic-ui-react';
import classNames from 'classnames';

import InputSpinner from '../InputSpinner';

import styles from './index.module.css';


export default ({
    className,
    step = 1,
    ...props
}) => {
    // Merge class names
    className = classNames(
        className,
        styles.numberinputspinner,
    );

    function upHandler(value, event) {
        return (Number(value) + Number(step)) || 0;
    }

    function downHandler(value, event) {
        return (Number(value) - Number(step)) || 0;
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
        />
    );
}
