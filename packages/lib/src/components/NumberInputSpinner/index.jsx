import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'semantic-ui-react';
import classNames from 'classnames';

import InputSpinner from '../InputSpinner';

import styles from './index.module.css';


export default ({
    value = '0',
    className,
    ...props
}) => {
    // Merge class names
    className = classNames(
        className,
        styles.numberinputspinner,
    );

    function upHandler(value) {
        return (Number(value) + 1) || 0;
    }

    function downHandler(value) {
        return (Number(value) - 1) || 0;
    }

    function changeHandler(value) {
        return Math.trunc(value) || 0;
    }

    return (
        <InputSpinner {...props}
            value={value}
            className={className}
            onUp={upHandler}
            onDown={downHandler}
            onChange={changeHandler}
        />
    );
}
