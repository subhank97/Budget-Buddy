import { useBudgets } from "../Contexts/BudgetContext";
import BudgetCard from "./BudgetCard";

export default function TotalBudgetCard() {

  const { expenses, budgets } = useBudgets()

  const amount = expenses.reduce((total, expense) =>
  total + expense.amount, 0) 

  const max = budgets.reduce((total, budgets) =>
  total + budgets.max, 0) 

  if (max === 0) return null

  return (
    <BudgetCard amount={amount} name="Total" max={max} hideButtons />
  )
}
