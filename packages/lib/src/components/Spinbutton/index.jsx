import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import Spinner from '../Spinner';

import styles from './index.module.css';


export default ({
    contentPosition = 'left',
    buttonOrientation = 'vertical',
    handleUp,
    handleDown,
    handleChange,
    disabled,
    ...props
}) => {
    const [value, setValue] = useState(props.value);

    function onUp() {
        handleUp && setValue(handleUp(value) ?? value);
    }

    function onDown() {
        handleDown && setValue(handleDown(value) ?? value);
    }

    function onChange(event) {
        handleChange && setValue(handleChange(event.target.value) ?? event.target.value);
    }

    function onWheel(event) {
        (event.deltaY < 0) ? onUp() : onDown();
    }

    function onKeyDown(event) {
        event.preventDefault();

        switch (event.key) {
            case 'ArrowUp':
            case '+':
                onUp();
                break;
            case 'ArrowDown':
            case '-':
                onDown();
                break;
        }
    }

    function onRef(node) {
        // Get a reference to the current native INPUT element
        const input = node?.inputRef.current;

        // Handle the wheel event on the real INPUT element
        input && (input.parentElement.onwheel = event => {
            event.preventDefault();
        });
    }

    return (
        <Spinner
            contentPosition={contentPosition}
            buttonOrientation={buttonOrientation}
            onUp={onUp}
            onDown={onDown}
            onWheel={onWheel}
            disabled={disabled}
        >
            <Input {...props}
                className={styles.spinbutton}
                value={value}
                onChange={onChange}
                onKeyDown={props.readOnly && onKeyDown}
                onWheel={onWheel}
                ref={onRef}
            />
        </Spinner>
    );
}
