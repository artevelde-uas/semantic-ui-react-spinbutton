import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import styles from './index.module.css';


export default ({ handleUp, handleDown, ...props }) => {
    const [value, setValue] = useState(props.value);

    function onUp() {
        const newValue = handleUp && handleUp(value);

        if (newValue === undefined) return;
        
        setValue(newValue);
    }

    function onDown() {
        const newValue = handleDown && handleDown(value);

        if (newValue === undefined) return;

        setValue(newValue);
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
                    />
                    <Button
                        className={styles.down}
                        icon='angle down'
                        onClick={onDown}
                    />
                </div>
            }
            labelPosition='right'
        />
    );
}