import React from 'react'
import PropTypes from 'prop-types'
import { Form, Segment, Button, Divider, Modal, Message, Header } from 'semantic-ui-react'
import _ from 'lodash'

import OrderList from './OrderList'

class Account extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            login: {
                usernameOrEmail: '',
                password: ''
            },
            signup: {
                username: '',
                email: '',
                password: '',
                confirmPassword: ''
            },
            modalOpen: false
        }

        this.handleLoginOnChange = this.handleLoginOnChange.bind(this)
        this.handleSignupOnChange = this.handleSignupOnChange.bind(this)
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalOnClose = this.handleModalOnClose.bind(this)
        this.handleUserLogin = this.handleUserLogin.bind(this)
        this.handleUserLogout = this.handleUserLogout.bind(this)
        this.handleUserSignup = this.handleUserSignup.bind(this)
    }

    handleLoginOnChange(e) {
        let login = _.assign({}, this.state.login)

        login[e.target.name] = e.target.value
        this.setState({ login })
    }

    handleSignupOnChange(e) {
        let signup = _.assign({}, this.state.signup)

        signup[e.target.name] = e.target.value
        this.setState({ signup })
    }

    handleModalOpen() {
        this.setState({ modalOpen: true })
    }

    handleModalOnClose() {
        let signup = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.setState({ signup, modalOpen: false })
    }

    handleUserLogin() {
        this.props.login(this.state.login.usernameOrEmail, this.state.login.password)
    }

    handleUserLogout() {
        this.props.logout()
        this.props.history.push('/')
    }

    handleUserSignup() {
        this.props.userSignupRequest(this.state.signup)
        this.handleModalOnClose()
    }

    render() {
        const modalTrigger =
            <Button
                secondary={true}
                fluid={true}
                onClick={this.handleModalOpen}
                >Sign Up Now
            </Button>

        const notLoggedIn =
            <Form>
                <Form.Input
                    name='usernameOrEmail'
                    value={this.state.login.username}
                    label='Username or E-mail'
                    placeholder='Username or E-mail'
                    onChange={this.handleLoginOnChange}
                />

                <Form.Input
                    type='password'
                    name='password'
                    value={this.state.login.password}
                    label='Password'
                    placeholder='Password'
                    onChange={this.handleLoginOnChange}
                />

                <Segment padded>
                    <Button
                        primary={true}
                        fluid={true}
                        onClick={this.handleUserLogin}
                        >Login
                    </Button>

                    <Divider horizontal>Or</Divider>

                    <Modal trigger={modalTrigger} open={this.state.modalOpen} onClose={this.handleModalOnClose} closeIcon>
                        <Modal.Header>Sign Up Now</Modal.Header>
                        <Modal.Content>
                            <Form>
                                <Form.Input
                                    name='username'
                                    value={this.state.signup.username}
                                    label='Username'
                                    placeholder='Username'
                                    onChange={this.handleSignupOnChange}
                                />

                                <Form.Input
                                    name='email'
                                    value={this.state.signup.email}
                                    label='E-mail'
                                    placeholder='E-mail'
                                    onChange={this.handleSignupOnChange}
                                />

                                <Form.Input
                                    type='password'
                                    name='password'
                                    value={this.state.signup.password}
                                    label='Password'
                                    placeholder='Password'
                                    onChange={this.handleSignupOnChange}
                                />

                                <Form.Input
                                    type='password'
                                    name='confirmPassword'
                                    value={this.state.signup.confirmPassword}
                                    label='Confirm password'
                                    placeholder='Confirm password'
                                    onChange={this.handleSignupOnChange}
                                />

                            </Form>
                        </Modal.Content>

                        <Modal.Actions>
                            <Button
                                primary={true}
                                content='Sign up'
                                icon='signup'
                                labelPosition='right'
                                onClick={this.handleUserSignup}
                            />
                        </Modal.Actions>
                    </Modal>
                </Segment>
            </Form>

        const isLoggedIn =
            <div>
                <Message info>
                    Logged in as <b>{this.props.auth.user.username}</b>
                </Message>

                <Header as='h3' attached='top'>My orders</Header>
                <Segment attached>
                    <OrderList orders={this.props.orders} />
                </Segment>

                <Divider />

                <Button
                    primary={true}
                    content='Log out'
                    icon='log out'
                    floated='right'
                    labelPosition='right'
                    onClick={this.handleUserLogout}
                />
            </div>

        return (
            <div>
                {this.props.auth.isAuthenticated ? isLoggedIn : notLoggedIn}
            </div>
        )
    }
}

Account.propTypes = {
    login: PropTypes.func.isRequired,
    logout: PropTypes.func.isRequired,
    userSignupRequest: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired,
    auth: PropTypes.object.isRequired,
    orders: PropTypes.array
}


export default Account
