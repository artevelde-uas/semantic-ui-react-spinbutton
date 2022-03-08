import { Tab, Container, Header, Item } from 'semantic-ui-react';
import { Spinner, Spinbutton } from 'semantic-ui-react-spinbutton';


const SpinnerPositionExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header>Spinner only</Item.Header>
                <Item.Meta>Vertical spinner</Item.Meta>
                <Item.Description>
                    <Spinner orientation='vertical' />
                </Item.Description>
                <Item.Meta>Horizontal spinner</Item.Meta>
                <Item.Description>
                    <Spinner orientation='horizontal' />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Horizontal spinbuttons</Item.Header>
                <Item.Meta>Horizontal spinbutton with horizontal spinner on the left</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='left'
                        buttonOrientation='horizontal'
                    />
                </Item.Description>
                <Item.Meta>Horizontal spinbutton with vertical spinner on the left</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='right'
                        buttonOrientation='vertical'
                    />
                </Item.Description>
                <Item.Meta>Horizontal spinbutton with horizontal spinner on the right</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='right'
                        buttonOrientation='horizontal'
                    />
                </Item.Description>
                <Item.Meta>Horizontal spinbutton with vertical spinner on the right</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='left'
                        buttonOrientation='vertical'
                    />
                </Item.Description>
                <Item.Meta>Horizontal spinbutton with wrapped spinner</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='wrapped'
                        buttonOrientation='horizontal'
                    />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Vertical spinbuttons</Item.Header>
                <Item.Meta>Vertical spinbutton with horizontal spinner at the top</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='top'
                        buttonOrientation='horizontal'
                        style={{ width: '100px' }}
                    />
                </Item.Description>
                <Item.Meta>Vertical spinbutton with vertical spinner at the top</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='top'
                        buttonOrientation='vertical'
                        style={{ width: '100px' }}
                    />
                </Item.Description>
                <Item.Meta>Vertical spinbutton with horizontal spinner at the bottom</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='bottom'
                        buttonOrientation='horizontal'
                        style={{ width: '100px' }}
                    />
                </Item.Description>
                <Item.Meta>Vertical spinbutton with vertical spinner at the bottom</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='bottom'
                        buttonOrientation='vertical'
                        style={{ width: '100px' }}
                    />
                </Item.Description>
                <Item.Meta>Vertical spinbutton with wrapped spinner</Item.Meta>
                <Item.Description>
                    <Spinbutton
                        buttonPosition='wrapped'
                        buttonOrientation='vertical'
                        style={{ width: '100px' }}
                    />
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

const SpinnerVariantExamples = () => (
    <Item.Group>
        <Item>
            <Item.Content>
                <Item.Header>Default Spinbutton</Item.Header>
                <Item.Meta>Default spinbutton with no behavior</Item.Meta>
                <Item.Description>
                    <Spinbutton
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
                    <Spinbutton
                        value='10'
                        onUp={value => (Number(value) + 1) || 0}
                        onDown={value => (Number(value) - 1) || 0}
                        onChange={value => Math.trunc(value) || 0}
                    />
                </Item.Description>
                <Item.Meta>Spinbutton with numbers (not editable)</Item.Meta>
                <Item.Description>
                    <Spinbutton
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
                    <Spinbutton
                        placeholder='Placeholder'
                        disabled
                    />
                </Item.Description>
            </Item.Content>
        </Item>
        <Item>
            <Item.Content>
                <Item.Header>Spinbutton with icon</Item.Header>
                <Item.Description>
                    <Spinbutton
                        placeholder='Placeholder'
                        icon='home'
                    />
                </Item.Description>
            </Item.Content>
        </Item>
    </Item.Group>
);

const panes = [
    { menuItem: 'Spinner positions', render: SpinnerPositionExamples },
    { menuItem: 'Spinner variants', render: SpinnerVariantExamples }
];

export default () => (
    <Container text>
        <Header as='h1'>Semantic UI React Spinbutton</Header>
        <Tab panes={panes} />
    </Container>
);
