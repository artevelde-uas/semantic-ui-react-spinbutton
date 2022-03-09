import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'semantic-ui-react';
import classNames from 'classnames';

import Spinner from '../Spinbutton';

import styles from './index.module.css';


export default ({
    value: defaultValue = '',
    buttonPosition = 'right',
    buttonOrientation = 'vertical',
    onUp,
    onDown,
    onChange,
    className,
    disabled,
    ...props
}) => {
    // Get reference to input component
    const inputRef = useRef();

    // Store the input value
    const [value, setValue] = useState(defaultValue);

    // Merge class names
    const wrapperClassName = classNames(
        className,
        styles.inputspinner,
        { [styles.top]: (buttonPosition === 'top' || (buttonPosition === 'wrapped' && buttonOrientation === 'vertical')) },
        { [styles.left]: (buttonPosition === 'left' || (buttonPosition === 'wrapped' && buttonOrientation === 'horizontal')) },
        { [styles.right]: (buttonPosition === 'right' || (buttonPosition === 'wrapped' && buttonOrientation === 'horizontal')) },
        { [styles.bottom]: (buttonPosition === 'bottom' || (buttonPosition === 'wrapped' && buttonOrientation === 'vertical')) }
    );

    // Prevent default scroll behavior on wheel event
    useEffect(() => {
        inputRef.current.inputRef.current.addEventListener('wheel', event => { event.preventDefault(); });
    });

    function upHandler(event) {
        onUp && setValue(onUp(value, event) ?? value);
    }

    function downHandler(event) {
        onDown && setValue(onDown(value, event) ?? value);
    }

    function changeHandler(event) {
        onChange && setValue(onChange(event.target.value, event) ?? event.target.value);
    }

    function wheelHandler(event) {
        (event.deltaY < 0) ? upHandler(event) : downHandler(event);
    }

    function keyHandler(event) {
        event.preventDefault();

        switch (event.key) {
            case 'ArrowUp':
            case '+':
                upHandler(event);
                break;
            case 'ArrowDown':
            case '-':
                downHandler(event);
                break;
        }
    }

    return (
        <Spinner
            className={wrapperClassName}
            position={buttonPosition}
            orientation={buttonOrientation}
            onUp={upHandler}
            onDown={downHandler}
            onWheel={wheelHandler}
            disabled={disabled}
        >
            <Input {...props}
                value={value}
                onChange={changeHandler}
                onKeyDown={props.readOnly && keyHandler}
                onWheel={wheelHandler}
                ref={inputRef}
                disabled={disabled}
            />
        </Spinner>
    );
}
