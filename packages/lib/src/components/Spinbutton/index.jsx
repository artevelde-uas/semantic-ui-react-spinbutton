import React from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';

import styles from './index.module.css';


export default (props) => (
    <Input {...props}
        className={styles.spinbutton}
        label={
            <div>
                <Button className={styles.up} icon='angle up' />
                <Button className={styles.down} icon='angle down' />
            </div>
        }
        labelPosition='right'
    />
);
