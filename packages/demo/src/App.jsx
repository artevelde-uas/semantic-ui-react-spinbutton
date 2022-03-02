import { Container, Header, Item } from 'semantic-ui-react'
import { Spinbutton } from 'semantic-ui-react-spinbutton';


export default () => (
    <Container text>
        <Header as='h2'>Semantic UI React Spinbutton</Header>
        <Item.Group>
            <Item>
                <Item.Content>
                    <Item.Header>Default Spinbutton</Item.Header>
                    <Item.Meta>Spinbutton with default settings</Item.Meta>
                    <Item.Description>
                        <Spinbutton placeholder='Placeholder' />
                    </Item.Description>
                </Item.Content>
            </Item>
        </Item.Group>
    </Container>
);
