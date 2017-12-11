import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Table, Button, Divider, Header, Radio, Input } from 'semantic-ui-react'
import _ from 'lodash'

class Confirmation extends React.Component {
    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)
    }

    submit() {
        this.props.submit()
    }

    render() {
        let totalPrice = 0
        let items = _.map(this.props.cart, (element, index) => {
        totalPrice += element.product.price * element.quantity
            return (
                <Table.Row key={index}>
                    <Table.Cell>{index+1}</Table.Cell>
                    <Table.Cell>{element.product.name}</Table.Cell>
                    <Table.Cell>{element.quantity}</Table.Cell>
                    <Table.Cell>{element.product.price}</Table.Cell>
                    <Table.Cell>{(element.product.price * element.quantity).toFixed(2)}</Table.Cell>
                </Table.Row>
            )
        })

        return (
            <div>
                <Segment attached>
                    <Header as='h3' attached='top'>Shopping cart</Header>
                    <Table striped padded attached>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>SN</Table.HeaderCell>
                                <Table.HeaderCell>Product name</Table.HeaderCell>
                                <Table.HeaderCell>Quantity</Table.HeaderCell>
                                <Table.HeaderCell>Unit Price</Table.HeaderCell>
                                <Table.HeaderCell>Subtotal</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {items}
                        </Table.Body>
                    </Table>

                    <Header as='h3' attached='top'>Shipping</Header>
                    <Segment attached>
                        <Radio label={this.props.shipping.data.deliveryMethod.charAt(0).toUpperCase() + this.props.shipping.data.deliveryMethod.slice(1)} checked />

                        <Header as='h4'>Details of recipient</Header>
                        <Input
                            label={{tag: true, content: 'First Name'}}
                            labelPosition='right'
                            value={this.props.shipping.data.firstName}
                            fluid={true}
                        />

                        <Divider hidden />
                        <Input
                            label={{tag: true, content: 'Last Name'}}
                            labelPosition='right'
                            value={this.props.shipping.data.lastName}
                            fluid={true}
                        />

                        <Divider hidden />
                        <Input
                            label={{tag: true, content: 'Phone Number'}}
                            labelPosition='right'
                            value={this.props.shipping.data.phoneNumber}
                            fluid={true}
                        />

                        <Divider hidden />
                        <Input
                            label={{tag: true, content: 'Country'}}
                            labelPosition='right'
                            value={this.props.shipping.data.country.toUpperCase()}
                            fluid={true}
                        />

                        <Divider hidden />
                        <Input
                            label={{tag: true, content: 'Address'}}
                            labelPosition='right'
                            value={this.props.shipping.data.address}
                            fluid={true}
                        />
                    </Segment>

                    <Header as='h3' attached='top'>Billing</Header>
                    <Segment attached>
                        <Radio label={this.props.billing.data.paymentMethod.charAt(0).toUpperCase() + this.props.billing.data.paymentMethod.slice(1)} checked />
                    </Segment>
                </Segment>

                <Divider />

                <Button
                    content='Total'
                    icon='dollar'
                    label={{ basic: true, pointing: 'left', content: totalPrice.toFixed(2) }}
                />

                <Button.Group floated='right'>
                    <Button primary onClick={(e) => this.props.previousStep()}>Previous step</Button>
                    <Button.Or />
                    <Button color='red' onClick={this.submit}>Place order</Button>
                </Button.Group>
            </div>
        )
    }
}

Confirmation.propTypes = {
    cart: PropTypes.array.isRequired,
    shipping: PropTypes.object.isRequired,
    billing: PropTypes.object.isRequired,
    previousStep: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
}


export default Confirmation
