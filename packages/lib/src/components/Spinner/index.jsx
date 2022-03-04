import React from 'react';
import { Button } from 'semantic-ui-react';
import classNames from 'classnames';

import styles from './index.module.css';


export default ({ onUp, onDown, className, disabled, ...props }) => (
    <div {...props}
        className={classNames(
            className,
            styles.spinner
        )}
    >
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
