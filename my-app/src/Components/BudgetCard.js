import React from 'react'
import { Card, Button, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from './Utility'



export default function BudgetCard({ name, amount, max }) {
  return (
    <Card>
        <Card.Body>
            <Card.Title>
                <div>{name}</div>
                <div>{currencyFormatter.format(amount)} / {currencyFormatter.format(max)}</div>
            </Card.Title>
        </Card.Body>
        <ProgressBar></ProgressBar>
        <Stack>
            <Button>Add Expense</Button>
            <Button>View Expense</Button>
        </Stack>
    </Card>
  )
}
