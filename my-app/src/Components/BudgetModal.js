import { Modal, Button, Form } from 'react-bootstrap'

export default function BudgetModal({ show, handleClose }) {

    function handleSubmit(){
        return
    }

  return (
    <Modal show={show} handleClose={handleClose}>
        <Form onSubmit={handleSubmit}>
            <Modal.Header closeButton>
                <Modal.Title>New Budget</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="max">
                    <Form.Label>Maximum Spending</Form.Label>
                    <Form.Control type="number" required min={0} step={.01} />
                </Form.Group>
                <div className="d-flex justify-content-end">
                    <Button variant="primary" type="submit">Add</Button>
                </div>
            </Modal.Body>
        </Form>
    </Modal>
  )
}