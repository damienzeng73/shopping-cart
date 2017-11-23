import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import _ from 'lodash'

class CartPage extends React.Component {
    render() {
        const items = _.map(this.props.cart, (element, index) => {
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
                <Table striped padded>
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

                <Button.Group floated='right'>
                    <Button primary as={Link} to='/'>Continue shopping</Button>
                    <Button.Or />
                    <Button color='red'>Place order</Button>
                </Button.Group>
            </div>
        )
    }
}

CartPage.propTypes = {
    cart: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}


export default withRouter(connect(mapStateToProps, {})(CartPage))
