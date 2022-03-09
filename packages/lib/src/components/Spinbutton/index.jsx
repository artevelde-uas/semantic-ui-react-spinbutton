import React, { useEffect, useRef, useState } from 'react';
import { Input } from 'semantic-ui-react';
import classNames from 'classnames';

import Spinner from '../Spinner';

import styles from './index.module.css';


export default ({
    value: defaultValue,
    buttonPosition = 'right',
    buttonOrientation = 'vertical',
    onUp,
    onDown,
    onChange,
    className,
    disabled,
    ...props
}) => {
    const inputRef = useRef();
    const [value, setValue] = useState(defaultValue);

    const wrapperClassName = classNames(
        className,
        styles.spinbutton,
        { [styles.top]: (buttonPosition === 'top' || (buttonPosition === 'wrapped' && buttonOrientation === 'vertical')) },
        { [styles.left]: (buttonPosition === 'left' || (buttonPosition === 'wrapped' && buttonOrientation === 'horizontal')) },
        { [styles.right]: (buttonPosition === 'right' || (buttonPosition === 'wrapped' && buttonOrientation === 'horizontal')) },
        { [styles.bottom]: (buttonPosition === 'bottom' || (buttonPosition === 'wrapped' && buttonOrientation === 'vertical')) }
    );

    useEffect(() => {
        inputRef.current.inputRef.current.addEventListener('wheel', event => { event.preventDefault(); });
    });

    function upHandler() {
        onUp && setValue(onUp(value) ?? value);
    }

    function downHandler() {
        onDown && setValue(onDown(value) ?? value);
    }

    function changeHandler(event) {
        onChange && setValue(onChange(event.target.value) ?? event.target.value);
    }

    function wheelHandler(event) {
        (event.deltaY < 0) ? upHandler() : downHandler();
    }

    function keyHandler(event) {
        event.preventDefault();

        switch (event.key) {
            case 'ArrowUp':
            case '+':
                upHandler();
                break;
            case 'ArrowDown':
            case '-':
                downHandler();
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
