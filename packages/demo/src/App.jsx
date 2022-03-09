import { Tab, Container, Header, Item, Input } from 'semantic-ui-react';
import { InputSpinner, Spinbutton } from 'semantic-ui-react-spinbutton';


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

const InputSpinnerVariantExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header>Default Spinbutton</Item.Header>
                <Item.Meta>Default spinbutton with no behavior</Item.Meta>
                <Item.Description>
                    <InputSpinner
                        placeholder='Placeholder'
                    />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Number Spinbutton</Item.Header>
                <Item.Meta>Spinbutton with numbers (editable)</Item.Meta>
                <Item.Description>
                    <InputSpinner
                        value='10'
                        onUp={value => (Number(value) + 1) || 0}
                        onDown={value => (Number(value) - 1) || 0}
                        onChange={value => Math.trunc(value) || 0}
                    />
                </Item.Description>
                <Item.Meta>Spinbutton with numbers (not editable)</Item.Meta>
                <Item.Description>
                    <InputSpinner
                        placeholder='Placeholder'
                        value='10'
                        onUp={value => (Number(value) + 1) || 0}
                        onDown={value => (Number(value) - 1) || 0}
                        readOnly
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
                <Item.Meta>Spinbutton with icon</Item.Meta>
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

const panes = [
    { menuItem: 'Spinbutton positions', render: () => <SpinbuttonPositionExamples /> },
    { menuItem: 'InputSpinner variants', render: () => <InputSpinnerVariantExamples /> }
];

export default () => (
    <Container text>
        <Header as='h1'>Semantic UI React Spinbutton</Header>
        <Tab panes={panes} />
    </Container>
);
