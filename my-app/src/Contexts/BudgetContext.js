import React, { useContext, useState } from 'react'
import { v4 } from 'uuid'

const BudgetsContext = React.createContext()

export function useBudgets(){
    return useContext(BudgetsContext)
}
// { Budget
//     id:
//     name:
//     max:
// }
// { Exepense
//     id:
//     budgetId:
//     amount:
//     description:
// }
export const BudgetsProvider = ({ children }) => {
    const [budgets, setBudgets] = useState([]) 
    const [expenses, setExpenses] = useState([])

    function getBudgetExpenses(budgetId){
        return expenses.filter(expense => expense.budgetId === budgetId)
    }
    
    function addExpense({ amount, description, budgetId }){
        setExpenses(prevExpenses => {
            return [...prevExpenses, {id: v4(), amount, description, budgetId}]
        })
    }

    function addBudget({ name, max }){
        setBudgets(prevBudgets => {
            return [...prevBudgets, {id: v4(), name, max}]
        })
    }

    function deleteBudget({ id }){
        setBudgets( prevBudgets => {
            return prevBudgets.filter(budget => budget.id !== id)
        })
    }
    function deleteExpense({ id }){
        setExpenses( prevExpenses => {
            return prevExpenses.filter(budget => budget.id !== id)
        })
    }

    return (
        <BudgetsContext.Provider value={{
            budgets, 
            expenses,
            getBudgetExpenses,
            addExpense,
            addBudget,
            deleteBudget,
            deleteExpense
        }}>
            {children}
        </BudgetsContext.Provider>
    )
}