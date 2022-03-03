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
        setValue((handleChange && handleChange(event.target.value)) ?? event.target.value);
    }
    
    function onWheel(event) {
        (event.deltaY < 0) ? onUp() : onDown();
    }

    function onRef(node) {
        const input = node?.inputRef.current;

        input && (input.onwheel = event => {
            event.preventDefault();
        });
    }

    return (
        <Input {...props}
            value={value}
            className={styles.spinbutton}
            label={
                <div>
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
            onChange={onChange}
            onWheel={onWheel}
            ref={onRef}
        />
    );
}