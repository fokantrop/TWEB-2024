import React from 'react';
import { Container, Form, Button } from "react-bootstrap";

const Contacts = () => {
    return (
        <Container style={{ width: '500px' }}>
            <h1 className="text-center">Свяжитесь с нами</h1>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Электронная почта</Form.Label>
                    <Form.Control type="email" placeholder="Введите ваш email" />
                    <Form.Text className="text-muted">
                        Ваша почта в надежных руках.
                    </Form.Text>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Пример</Form.Label>
                    <Form.Control as="textarea" rows={3} placeholder="Введите ваше сообщение" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Отметьте меня" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Отправить
                </Button>
            </Form>
        </Container>
    );
}

export default Contacts;
