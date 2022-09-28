import Container from 'react-bootstrap/Container';
import { Stack, Button } from 'react-bootstrap';

function App() {
  return (
    <Container className='my-4'>
      <Stack direction="horizontal" gap="2" className='mb-4'>
        <h1 className='me-auto'>Budget Buddy</h1>
        <Button varient="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div style={{display:"grid", gridTemplate:"repeat(auto-fill, minmax(300px,1rfr))", 
                   gap: "1rem", alignItems:"flex-start" }}></div>
    </Container>
  );
}

export default App;
