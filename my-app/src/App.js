import Container from 'react-bootstrap/Container';
import { Stack, Button } from 'react-bootstrap';
import BudgetCard from './Components/BudgetCard';
import BudgetModal from './Components/BudgetModal';
import { useState } from 'react';
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from './Contexts/BudgetContext';
import ExpenseModal from './Components/ExpenseModal';
import UncategorizedBudgetCard from './Components/UncategorizedBudgetCard';
import TotalBudgetCard from './Components/TotalBudgetCard';
import ViewExpensesModal from './Components/ViewExpensesModal';


function App() {

  const [showBudgetModal, setShowBudgetModal] = useState(false) 
  const [showExpenseModal, setShowExpenseModal] = useState(false) 
  const [addExpenseModal, setAddExpenseModal] = useState() 
  const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState() 

  const { budgets, getBudgetExpenses } = useBudgets()

  function openExpenseModal(budgetId){
    setShowExpenseModal(true)
    setAddExpenseModal(budgetId)
  }

  return (
    <div>
    <Container className='my-4'>
      <Stack direction="horizontal" gap="2" className='mb-4'>
        <h1 className='me-auto'>Budget Buddy</h1>
        <Button varient="primary" onClick={() => setShowBudgetModal(true)}>Add Budget</Button>
        <Button variant="outline-primary" onClick={openExpenseModal}>Add Expense</Button>
      </Stack>
      <div style={{
                    display:"grid", 
                    gridTemplate:"repeat(auto-fill, minmax(300px,1rfr))", 
                    gap: "1rem", 
                    alignItems:"flex-start" }}>
        {budgets.map(budget => {
          const amount = getBudgetExpenses(budget.id).reduce((total, expense) =>
          total + expense.amount, 0)
          return <BudgetCard
                            gray 
                            key={budget.id} 
                            name={budget.name} 
                            amount={amount} 
                            max={budget.max}
                            addExpenseClick={() => openExpenseModal(budget.id)}
                            viewExpenseClick={() => setViewExpenseModalBudgetId(budget.id)} />
        })}
        <UncategorizedBudgetCard 
          addExpenseClick={openExpenseModal} 
          viewExpenseClick={() => setViewExpenseModalBudgetId(UNCATEGORIZED_BUDGET_ID)} />
        <TotalBudgetCard />
      </div>
    </Container>
    <BudgetModal 
      show={showBudgetModal} handleClose={() => setShowBudgetModal(false)}>
    </BudgetModal>
    <ExpenseModal 
      show={showExpenseModal} handleClose={() => setShowExpenseModal(false)} defaultBudgetId={addExpenseModal}> 
    </ExpenseModal>
    <ViewExpensesModal 
      budgetId={viewExpenseModalBudgetId} handleClose={() => setViewExpenseModalBudgetId()}>
    </ViewExpensesModal>
    </div>
  );
}

export default App;
