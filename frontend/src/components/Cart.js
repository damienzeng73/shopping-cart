import React from 'react'
import PropTypes from 'prop-types'
import { Table, Button } from 'semantic-ui-react'
import _ from 'lodash'

const Cart = (props) => {
    let items = _.map(props.cart, (element, index) => {
        return (
            <Table.Row key={index}>
                <Table.Cell>{index+1}</Table.Cell>
                <Table.Cell>{element.product.name}</Table.Cell>
                <Table.Cell>{element.quantity}</Table.Cell>
                <Table.Cell>{element.product.price}</Table.Cell>
                <Table.Cell>{(element.product.price * element.quantity).toFixed(2)}</Table.Cell>
                <Table.Cell>
                    <Button circular icon='trash' onClick={(e) => props.handleRemoveItem(e, element)}/>
                </Table.Cell>
            </Table.Row>
        )
    })

    return (
        <Table striped padded>
            <Table.Header>
                <Table.Row>
                    <Table.HeaderCell>SN</Table.HeaderCell>
                    <Table.HeaderCell>Product name</Table.HeaderCell>
                    <Table.HeaderCell>Quantity</Table.HeaderCell>
                    <Table.HeaderCell>Unit Price</Table.HeaderCell>
                    <Table.HeaderCell>Subtotal</Table.HeaderCell>
                    <Table.HeaderCell></Table.HeaderCell>
                </Table.Row>
            </Table.Header>

            <Table.Body>
                {items}
            </Table.Body>
        </Table>
    )
}

Cart.propTypes = {
    cart: PropTypes.array.isRequired,
    handleRemoveItem: PropTypes.func.isRequired
}


export default Cart
