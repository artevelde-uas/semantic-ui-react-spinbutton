import React from 'react';
import { Button } from 'semantic-ui-react';

import styles from './index.module.css';


export default ({ onUp, onDown, disabled, ...props }) => (
    <div {...props} className={styles.spinner}>
        <Button
            className={styles.up}
            icon='caret up'
            onClick={onUp}
            disabled={disabled}
        />
        <Button
            className={styles.down}
            icon='caret down'
            onClick={onDown}
            disabled={disabled}
        />
    </div>
);
