import { Container, Header, Item } from 'semantic-ui-react'
import { Spinbutton } from 'semantic-ui-react-spinbutton';


export default () => (
    <Container text>
        <Header as='h1'>Semantic UI React Spinbutton</Header>
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
                            handleUp={value => (Number(value) + 1) || 0}
                            handleDown={value => (Number(value) - 1) || 0}
                            handleChange={value => Math.trunc(value) || 0}
                        />
                    </Item.Description>
                    <Item.Meta>Spinbutton with numbers (not editable)</Item.Meta>
                    <Item.Description>
                        <Spinbutton
                            placeholder='Placeholder'
                            value='10'
                            handleUp={value => (Number(value) + 1) || 0}
                            handleDown={value => (Number(value) - 1) || 0}
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
    </Container>
);
