import Container from 'react-bootstrap/Container';
import { Stack, Button } from 'react-bootstrap';
import BudgetCard from './Components/BudgetCard';
import BudgetModal from './Components/BudgetModal';


function App() {
  return (
    <div>
    <Container className='my-4'>
      <Stack direction="horizontal" gap="2" className='mb-4'>
        <h1 className='me-auto'>Budget Buddy</h1>
        <Button varient="primary">Add Budget</Button>
        <Button variant="outline-primary">Add Expense</Button>
      </Stack>
      <div style={{display:"grid", gridTemplate:"repeat(auto-fill, minmax(300px,1rfr))", 
                   gap: "1rem", alignItems:"flex-start" }}>
        <BudgetCard name="Entertainment" amount={250} max={1000}></BudgetCard>
      </div>
    </Container>
    <BudgetModal show></BudgetModal>
    </div>
  );
}

export default App;
