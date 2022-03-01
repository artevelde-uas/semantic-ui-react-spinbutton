import { Container, Header, Item } from 'semantic-ui-react'
import { Spinbutton } from 'semantic-ui-react-spinbutton';


function App() {
  return (
    <Container text>
      <Header as='h2'>Header</Header>
      <Item.Group>
        <Item>
          <Item.Content>
            <Item.Header as='a'>Default</Item.Header>
            <Item.Meta>Spinbutton with default settings</Item.Meta>
            <Item.Description>
              <Spinbutton placeholder='Placeholder' />
            </Item.Description>
          </Item.Content>
        </Item>
      </Item.Group>
    </Container>
  );
}

export default App;
