import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import styles from './index.module.css';


export default ({ handleUp, handleDown, handleChange, ...props }) => {
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
        const input = node?.inputRef.current;

        input && (input.parentElement.onwheel = event => {
            event.preventDefault();
        });
    }

    return (
        <Input {...props}
            value={value}
            className={styles.spinbutton}
            label={
                <div className={styles.spinner}>
                    <Button
                        className={styles.up}
                        icon='angle up'
                        onClick={onUp}
                        disabled={props.disabled}
                    />
                    <Button
                        className={styles.down}
                        icon='angle down'
                        onClick={onDown}
                        disabled={props.disabled}
                    />
                </div>
            }
            labelPosition='right'
            iconPosition={props.icon && 'left'}
            onChange={onChange}
            onWheel={onWheel}
            onKeyDown={props.readOnly && onKeyDown}
            ref={onRef}
        />
    );
}
