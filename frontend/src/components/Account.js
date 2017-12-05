import React from 'react'
import { Form, Segment, Button, Divider, Modal } from 'semantic-ui-react'

class Account extends React.Component {
    render() {
        return (
            <Form>
                <Form.Input label='Username or E-mail' placeholder='Username or E-mail' />
                <Form.Input label='Password' placeholder='Password' type='password' />
                <Segment padded>
                    <Button primary fluid>Login</Button>
                    <Divider horizontal>Or</Divider>
                    <Modal trigger={<Button secondary fluid>Sign Up Now</Button>} closeIcon>
                        <Modal.Header>Sign Up Now</Modal.Header>
                        <Modal.Content>
                            <Form>
                                <Form.Input label='Username' placeholder='Username' />
                                <Form.Input label='E-mail' placeholder='E-mail' />
                                <Form.Input label='Password' placeholder='Password' type='password' />
                                <Form.Input label='Confirm password' placeholder='Confirm password' type='password' />
                            </Form>
                        </Modal.Content>

                        <Modal.Actions>
                            <Button primary content='Sign up' icon='signup' labelPosition='right' />
                        </Modal.Actions>
                    </Modal>
                </Segment>
            </Form>
        )
    }
}


export default Account
