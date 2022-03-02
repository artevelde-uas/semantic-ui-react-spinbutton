import React from 'react';
import { Input } from 'semantic-ui-react';
import { Button } from 'semantic-ui-react';


export default (props) => (
    <Input {...props}
        label={
            <div>
                <Button icon='angle up' />
                <Button icon='angle down' />
            </div>
        }
        labelPosition='right'
    />
);
