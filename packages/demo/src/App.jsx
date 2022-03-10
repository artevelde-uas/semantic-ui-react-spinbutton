import { Tab, Container, Header, Item, Button } from 'semantic-ui-react';
import { Spinbutton, InputSpinner, NumberInputSpinner } from 'semantic-ui-react-spinbutton';


const Content = () => (
    <div style={{
        border: '1px solid rgba(34, 36, 38, 0.15)',
        padding: '0.67857143em 1em',
        color: 'rgba(34, 36, 38, 0.15)'
    }}>
        Placeholder
    </div>
);

const SpinbuttonPositionExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header>Spinbutton only</Item.Header>
                <Item.Meta>Vertical spinbuttons</Item.Meta>
                <Item.Description>
                    <Spinbutton orientation='vertical' />
                </Item.Description>
                <Item.Meta>Horizontal spinbuttons</Item.Meta>
                <Item.Description>
                    <Spinbutton orientation='horizontal' />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Nested spinbuttons</Item.Header>
                <Item.Meta>Spinbuttonscan be nested</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        orientation='horizontal'
                        upIcon='angle double right'
                        downIcon='angle double left'
                    >
                        <Spinbutton
                            orientation='horizontal'
                            upIcon='angle right'
                            downIcon='angle left'
                        />
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        orientation='horizontal'
                        upIcon='caret right'
                        downIcon='caret left'
                        style={{
                            minHeight: '4em'
                        }}
                    >
                        <Spinbutton
                            orientation='vertical'
                        />
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        orientation='horizontal'
                        upIcon='caret right'
                        downIcon='caret left'
                        style={{
                            minHeight: '5em'
                        }}
                    >
                        <Spinbutton
                            orientation='vertical'
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
                        position='right'
                        orientation='vertical'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal spinbutton on the right</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        position='right'
                        orientation='horizontal'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with vertical spinbutton on the left</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        position='left'
                        orientation='vertical'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal spinbutton on the left</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        position='left'
                        orientation='horizontal'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal wrapped spinbutton</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        position='wrapped'
                        orientation='horizontal'
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
                        position='top'
                        orientation='vertical'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal spinbutton at the top</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        position='top'
                        orientation='horizontal'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with vertical spinbutton at the bottom</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        position='bottom'
                        orientation='vertical'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with horizontal spinbutton at the bottom</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        position='bottom'
                        orientation='horizontal'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Meta>Content with vertical wrapped spinbutton</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        position='wrapped'
                        orientation='vertical'
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
                        orientation='horizontal'
                        upIcon='arrow right'
                        downIcon='arrow left'
                        size='large'
                    />
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        orientation='horizontal'
                        upIcon='search plus'
                        downIcon='search minus'
                        size='large'
                    />
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        orientation='vertical'
                        upIcon='volume up'
                        downIcon='volume down'
                        style={{
                            minHeight: '4em'
                        }}
                    />
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        orientation='horizontal'
                        upIcon='fast forward'
                        downIcon='fast backward'
                    >
                        <Spinbutton
                            orientation='horizontal'
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
                        position='right'
                        orientation='vertical'
                        upIcon='angle up'
                        downIcon='angle down'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        position='wrapped'
                        orientation='horizontal'
                        upIcon='plus'
                        downIcon='minus'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
                <Item.Description>
                    <Spinbutton
                        position='bottom'
                        orientation='horizontal'
                        upIcon='long arrow alternate right'
                        downIcon='long arrow alternate left left'
                        size='tiny'
                    >
                        <Content />
                    </Spinbutton>
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

const InputSpinnerVariantExamples = () => (
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

const panes = [
    { menuItem: 'Spinbutton positions', render: () => <SpinbuttonPositionExamples /> },
    { menuItem: 'Spinbutton icons', render: () => <SpinbuttonIconExamples /> },
    { menuItem: 'InputSpinner variants', render: () => <InputSpinnerVariantExamples /> },
    { menuItem: 'NumberInputSpinner', render: () => <NumberInputSpinnerExamples /> }
];

export default () => (
    <Container text>
        <Header as='h1'>Semantic UI React Spinbutton</Header>
        <Tab panes={panes} />
    </Container>
);
