import React, { useState } from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import styles from './index.module.css';


export default ({ handleUp, handleDown, ...props }) => {
    const [value, setValue] = useState(props.value);

    function onUp() {
        handleUp && setValue(handleUp(value) ?? value);
    }

    function onDown() {
        handleDown && setValue(handleDown(value) ?? value);
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