import React from 'react'
import { Card, Button, ProgressBar, Stack } from 'react-bootstrap'
import { currencyFormatter } from './Utility'



export default function BudgetCard({ name, amount, max }) {
  return (
    <Card>
        <Card.Body>
            <Card.Title className='d-flex justify-content-between align-items-baseline fw-normal mb-3'>
                <div className='me-2'>{name}</div>
                <div className='d-flex align-items-baseline'>{currencyFormatter.format(amount)} 
                <span className='text-muted fs-6 ms-1'>/ {currencyFormatter.format(max)} 
                </span>
                </div>
            </Card.Title>
        </Card.Body>
        <ProgressBar className='rounded-pill'></ProgressBar>
        <Stack direction='horizontal' gap={2} className="mt-4">
            <Button variant="outline-primary" className="ms-auto">Add Expense</Button>
            <Button variant="outline-secondary">View Expense</Button>
        </Stack>
    </Card>
  )
}
