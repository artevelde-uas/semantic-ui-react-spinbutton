import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import Spinner from '../Spinner';

import styles from './index.module.css';


export default ({
    value: defaultValue,
    buttonPosition = 'right',
    buttonOrientation = 'vertical',
    onUp,
    onDown,
    onChange,
    disabled,
    ...props
}) => {
    const [value, setValue] = useState(defaultValue);

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

    function refHandler(node) {
        // Get a reference to the current native INPUT element
        const input = node?.inputRef.current;

        // Handle the wheel event on the real INPUT element
        input && (input.parentElement.onwheel = event => {
            event.preventDefault();
        });
    }

    return (
        <Spinner
            position={buttonPosition}
            orientation={buttonOrientation}
            onUp={upHandler}
            onDown={downHandler}
            onWheel={wheelHandler}
            disabled={disabled}
        >
            <Input {...props}
                className={styles.spinbutton}
                value={value}
                onChange={changeHandler}
                onKeyDown={props.readOnly && keyHandler}
                onWheel={wheelHandler}
                ref={refHandler}
                disabled={disabled}
            />
        </Spinner>
    );
}
