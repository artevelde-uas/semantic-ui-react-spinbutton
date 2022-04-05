import React, { useState } from 'react';
import { Tab, Container, Header, Item, Button, Form, Input } from 'semantic-ui-react';
import { Spinbutton, InputSpinner, NumberInputSpinner } from 'semantic-ui-react-spinbutton';


const Content = ({ style, ...props }) => (
    <div {...props}
        style={{
            width: '100%',
            height: '100%',
            border: '1px solid rgba(34, 36, 38, 0.15)',
            padding: '0.67857143em 1em',
            color: 'rgba(34, 36, 38, 0.15)',
            background: `repeating-linear-gradient(
                45deg,
                transparent,
                transparent 10px,
                rgba(34, 36, 38, 0.05) 10px,
                rgba(34, 36, 38, 0.05) 20px
            )`,
            backgroundClip: 'padding-box',
            ...style
        }}
    >
        Placeholder
    </div>
);

const SubmitForm = () => {
    const [value, setValue] = useState('');
    const [submittedValue, setSubmittedValue] = useState('');

    function handleChange(event) {
        setValue(event.target.value);
    }

    function handleSubmit() {
        setSubmittedValue(value);
    }

    return (
        <React.Fragment>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <NumberInputSpinner
                        placeholder='Number'
                        onChange={handleChange}
                    />
                    <Form.Button type='submit' content='Submit' />
                </Form.Group>
            </Form>
            <br />
            <strong>onChange:</strong>
            <pre>
                {JSON.stringify({ value }, null, 2)}
            </pre>
            <strong>onSubmit:</strong>
            <pre>
                {JSON.stringify({ submittedValue }, null, 2)}
            </pre>
        </React.Fragment>
    );
}

const SpinbuttonPositionExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header>Spinbutton only</Item.Header>
                <Item.Meta>Vertical spinbuttons</Item.Meta>
                <Item.Description>
                    <Spinbutton buttonOrientation='vertical' />
                </Item.Description>
                <Item.Meta>Horizontal spinbuttons</Item.Meta>
                <Item.Description>
                    <Spinbutton buttonOrientation='horizontal' />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Nested spinbuttons</Item.Header>
                <Item.Meta>Spinbuttons can be nested</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonOrientation='horizontal'
                        upIcon='angle double right'
                        downIcon='angle double left'
                    >
                        <Spinbutton
                            buttonOrientation='horizontal'
                            upIcon='angle right'
                            downIcon='angle left'
                        />
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        buttonOrientation='horizontal'
                        upIcon='caret right'
                        downIcon='caret left'
                        style={{
                            minHeight: '4em'
                        }}
                    >
                        <Spinbutton
                            buttonOrientation='vertical'
                        />
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        buttonOrientation='horizontal'
                        upIcon='caret right'
                        downIcon='caret left'
                        style={{
                            minHeight: '5em'
                        }}
                    >
                        <Spinbutton
                            buttonOrientation='vertical'
                        >
                            <Button
                                icon='circle outline'
                                size='small'
                                style={{
                                    margin: '0',
                                    borderRadius: '0'
                                }}
                            />
                        </Spinbutton>
                    </Spinbutton>
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Horizontal layout</Item.Header>
                <Item.Meta>Content with vertical spinbutton on the right</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='right'
                        buttonOrientation='vertical'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal spinbutton on the right</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='right'
                        buttonOrientation='horizontal'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with vertical spinbutton on the left</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='left'
                        buttonOrientation='vertical'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal spinbutton on the left</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='left'
                        buttonOrientation='horizontal'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal wrapped spinbutton</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='wrapped'
                        buttonOrientation='horizontal'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Vertical layout</Item.Header>
                <Item.Meta>Content with vertical spinbutton at the top</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='top'
                        buttonOrientation='vertical'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal spinbutton at the top</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='top'
                        buttonOrientation='horizontal'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with vertical spinbutton at the bottom</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='bottom'
                        buttonOrientation='vertical'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal spinbutton at the bottom</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='bottom'
                        buttonOrientation='horizontal'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with vertical wrapped spinbutton</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='wrapped'
                        buttonOrientation='vertical'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

const SpinbuttonIconExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Description>
                    <Spinbutton
                        placeholder='Placeholder'
                        buttonPosition='right'
                        buttonOrientation='vertical'
                        upIcon='angle up'
                        downIcon='angle down'
                        style={{
                            width: '16em'
                        }}
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        placeholder='Placeholder'
                        buttonPosition='wrapped'
                        buttonOrientation='horizontal'
                        upIcon='plus'
                        downIcon='minus'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='bottom'
                        buttonOrientation='horizontal'
                        upIcon='long arrow alternate right'
                        downIcon='long arrow alternate left left'
                        size='big'
                        buttonSize='mini'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        buttonOrientation='horizontal'
                        buttonSize='massive'
                        upIcon='arrow right'
                        downIcon='arrow left'
                    />
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        buttonOrientation='horizontal'
                        upIcon='search plus'
                        downIcon='search minus'
                    />
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        buttonOrientation='vertical'
                        upIcon='volume up'
                        downIcon='volume down'
                        style={{
                            minHeight: '4em'
                        }}
                    />
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        buttonOrientation='horizontal'
                        upIcon='fast forward'
                        downIcon='fast backward'
                    >
                        <Spinbutton
                            buttonOrientation='horizontal'
                            upIcon='forward'
                            downIcon='backward'
                        >
                            <Button
                                icon='play'
                                size='small'
                                style={{
                                    margin: '0',
                                    borderRadius: '0'
                                }}
                            />
                        </Spinbutton>
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        buttonOrientation='horizontal'
                        upIcon='caret right'
                        downIcon='caret left'
                        style={{
                            minHeight: '4em'
                        }}
                    >
                        <Spinbutton
                            buttonOrientation='vertical'
                        />
                    </Spinbutton>
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

const InputSpinnerExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header>Default Spinbutton</Item.Header>
                <Item.Meta>Default horizontal spinbutton</Item.Meta>
                <Item.Description>
                    <InputSpinner
                        placeholder='Placeholder'
                    />
                </Item.Description>
                <Item.Meta>Default vertical spinbutton</Item.Meta>
                <Item.Description>
                    <InputSpinner
                        placeholder='Placeholder'
                        buttonPosition='wrapped'
                    />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Disabled Spinbutton</Item.Header>
                <Item.Description>
                    <InputSpinner
                        placeholder='Placeholder'
                        disabled
                    />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Labeled spinbuttons</Item.Header>
                <Item.Meta>Spinbutton with icon on the left</Item.Meta>
                <Item.Description>
                    <InputSpinner
                        placeholder='Placeholder'
                        icon={{ name: 'home', circular: true }}
                        iconPosition='left'
                    />
                </Item.Description>
                <Item.Meta>Spinbutton with icon on the right</Item.Meta>
                <Item.Description>
                    <InputSpinner
                        placeholder='Placeholder'
                        icon='home'
                    />
                </Item.Description>
                <Item.Header></Item.Header>
                <Item.Meta>Spinbutton with label on the left</Item.Meta>
                <Item.Description>
                    <InputSpinner
                        placeholder='Placeholder'
                        label='http://'
                    />
                </Item.Description>
                <Item.Header></Item.Header>
                <Item.Meta>Spinbutton with label on the right</Item.Meta>
                <Item.Description>
                    <InputSpinner
                        placeholder='Placeholder'
                        label={{ basic: true, content: 'kg' }}
                        labelPosition='right'
                    />
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

const NumberInputSpinnerExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header>Default NumberInputSpinner</Item.Header>
                <Item.Meta>Default empty NumberInputSpinner</Item.Meta>
                <Item.Description>
                    <NumberInputSpinner
                        placeholder='Number'
                    />
                </Item.Description>
                <Item.Meta>NumberInputSpinner (readonly)</Item.Meta>
                <Item.Description>
                    <NumberInputSpinner
                        value='10'
                        readOnly
                    />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>NumberInputSpinner <code>min</code>/<code>max</code> options</Item.Header>
                <Item.Meta>NumberInputSpinner with max value of '10'</Item.Meta>
                <Item.Description>
                    <NumberInputSpinner
                        value='0'
                        max='10'
                        readOnly
                    />
                </Item.Description>
                <Item.Meta>NumberInputSpinner with min value of '-10'</Item.Meta>
                <Item.Description>
                    <NumberInputSpinner
                        value='0'
                        min='-10'
                        readOnly
                    />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>NumberInputSpinner <code>step</code> option</Item.Header>
                <Item.Meta>NumberInputSpinner with step size '10'</Item.Meta>
                <Item.Description>
                    <NumberInputSpinner
                        value='100'
                        step='10'
                        readOnly
                    />
                </Item.Description>
                <Item.Meta>NumberInputSpinner with step size '0.01'</Item.Meta>
                <Item.Description>
                    <NumberInputSpinner
                        value='100'
                        step='0.01'
                        readOnly
                    />
                </Item.Description>
                <Item.Meta>NumberInputSpinner with alternate step sizes when holding <kbd>Shift</kbd> or <kbd>Ctrl</kbd> keys</Item.Meta>
                <Item.Description>
                    <NumberInputSpinner
                        value='100'
                        shiftStep='10'
                        ctrlStep='0.1'
                        readOnly
                    />
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

const FormExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header>Capture Form Values</Item.Header>
                <Item.Meta>Default empty NumberInputSpinner</Item.Meta>
                <Item.Description>
                    <SubmitForm />
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

const panes = [
    { menuItem: 'Positions', render: () => <SpinbuttonPositionExamples /> },
    { menuItem: 'Icons', render: () => <SpinbuttonIconExamples /> },
    { menuItem: 'InputSpinner', render: () => <InputSpinnerExamples /> },
    { menuItem: 'NumberInputSpinner', render: () => <NumberInputSpinnerExamples /> },
    { menuItem: 'Forms', render: () => <FormExamples /> }
];

export default () => (
    <Container text>
        <Header as='h1'>Semantic UI React Spinbutton</Header>
        <Tab panes={panes} />
    </Container>
);
