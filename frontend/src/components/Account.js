import React from 'react'
import PropTypes from 'prop-types'
import { Form, Segment, Button, Divider, Modal, Message, Header, Image } from 'semantic-ui-react'
import _ from 'lodash'

import OrderList from './OrderList'
import SelfProductList from './SelfProductList'

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
            newProduct: {
                category: '',
                name: '',
                price: 0.00,
                quantity: 1,
                description: '',
                imageUrl: ''
            },
            signupModalOpen: false,
            modalOpen: false
        }

        this.handleLoginOnChange = this.handleLoginOnChange.bind(this)
        this.handleSignupOnChange = this.handleSignupOnChange.bind(this)
        this.handleSignupModalOpen = this.handleSignupModalOpen.bind(this)
        this.handleSignupModalOnClose = this.handleSignupModalOnClose.bind(this)
        this.handleUserLogin = this.handleUserLogin.bind(this)
        this.handleUserLogout = this.handleUserLogout.bind(this)
        this.handleUserSignup = this.handleUserSignup.bind(this)
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalOnClose = this.handleModalOnClose.bind(this)
        this.handleNewProductOnChange = this.handleNewProductOnChange.bind(this)
        this.handleAddNewProduct = this.handleAddNewProduct.bind(this)
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

    handleSignupModalOpen() {
        this.setState({ signupModalOpen: true })
    }

    handleSignupModalOnClose() {
        let signup = {
            username: '',
            email: '',
            password: '',
            confirmPassword: ''
        }

        this.setState({ signup, signupModalOpen: false })
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
        this.handleSignupModalOnClose()
    }

    handleModalOpen() {
        this.setState({ modalOpen: true })
    }

    handleModalOnClose() {
        let newProduct = {
            category: '',
            name: '',
            price: 0.00,
            quantity: 1,
            description: '',
            imageUrl: ''
        }

        this.setState({ newProduct, modalOpen: false })
    }

    handleNewProductOnChange(e) {
        let newProduct = _.assign({}, this.state.newProduct)

        newProduct[e.target.name] = e.target.value
        this.setState({ newProduct })
    }

    handleAddNewProduct() {
        this.props.addNewProduct(this.state.newProduct)
        this.handleModalOnClose()
    }

    render() {
        const signupModalTrigger =
            <Button
                secondary={true}
                fluid={true}
                onClick={this.handleSignupModalOpen}
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
                    error={typeof this.props.auth.error !== 'undefined'}
                />

                <Form.Input
                    type='password'
                    name='password'
                    value={this.state.login.password}
                    label='Password'
                    placeholder='Password'
                    onChange={this.handleLoginOnChange}
                    error={typeof this.props.auth.error !== 'undefined'}
                />

                <Segment padded>
                    <Button
                        primary={true}
                        fluid={true}
                        onClick={this.handleUserLogin}
                        >Login
                    </Button>

                    <Divider horizontal>Or</Divider>

                    <Modal trigger={signupModalTrigger} open={this.state.signupModalOpen} onClose={this.handleSignupModalOnClose} closeIcon>
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

        const modalTrigger =
            <Button
                secondary={true}
                content='Add new product'
                onClick={this.handleModalOpen}
            />

        const isLoggedIn =
            <div>
                <Message info>
                    Logged in as <b>{this.props.auth.user.username}</b>
                </Message>

                <Header as='h3' attached='top'>My orders</Header>
                <Segment attached>
                    <OrderList orders={this.props.orders} />
                </Segment>

                <Header as='h3' attached='top'>Manage my products</Header>
                <Segment attached>
                    <SelfProductList products={this.props.products} updateProduct={this.props.updateProduct} deleteProduct={this.props.deleteProduct} />

                    <Modal trigger={modalTrigger} open={this.state.modalOpen} onClose={this.handleModalOnClose} closeIcon>
                        <Modal.Header>Add new prodcut</Modal.Header>
                        <Modal.Content>
                            <Form>
                                <Form.Input
                                    name='category'
                                    value={this.state.newProduct.category}
                                    label='Category'
                                    placeholder='Category'
                                    onChange={this.handleNewProductOnChange}
                                />

                                <Form.Input
                                    name='name'
                                    value={this.state.newProduct.name}
                                    label='Name'
                                    placeholder='Name'
                                    onChange={this.handleNewProductOnChange}
                                />

                                <Form.Input
                                    name='price'
                                    value={this.state.newProduct.price}
                                    label='Price'
                                    placeholder='Price'
                                    onChange={this.handleNewProductOnChange}
                                />

                                <Form.Input
                                    type='number'
                                    min='0'
                                    name='quantity'
                                    value={this.state.newProduct.quantity}
                                    label='Quantity'
                                    placeholder='Quantity'
                                    onChange={this.handleNewProductOnChange}
                                />

                                <Form.TextArea
                                    name='description'
                                    value={this.state.newProduct.description}
                                    label='Description'
                                    placeholder='Description'
                                    onChange={this.handleNewProductOnChange}
                                />

                                <Form.Input
                                    name='imageUrl'
                                    value={this.state.newProduct.imageUrl}
                                    label='Image URL'
                                    placeholder='Image URL'
                                    onChange={this.handleNewProductOnChange}
                                />

                                <Divider />

                                <Image
                                    src={this.state.newProduct.imageUrl}
                                    size='medium'
                                    centered={true}
                                    rounded={true}
                                />
                            </Form>
                        </Modal.Content>

                        <Modal.Actions>
                            <Button
                                primary={true}
                                content='Submit'
                                onClick={this.handleAddNewProduct}
                            />
                        </Modal.Actions>
                    </Modal>
                </Segment>

                <Divider />

                <Button
                    content='Back'
                    icon='arrow circle left'
                    floated='left'
                    labelPosition='left'
                    onClick={() => this.props.history.push('/')}
                />

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
    orders: PropTypes.array,
    products: PropTypes.array,
    updateProduct: PropTypes.func.isRequired,
    addNewProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
}


export default Account
