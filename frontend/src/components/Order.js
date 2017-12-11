import React from 'react'
import PropTypes from 'prop-types'
import { Modal, List, Header, Table, Divider, Input, Button } from 'semantic-ui-react'
import _ from 'lodash'

class Order extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            modalOpen: false
        }

        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalOnClose = this.handleModalOnClose.bind(this)
    }

    handleModalOpen() {
        this.setState({ modalOpen: true })
    }

    handleModalOnClose() {
        this.setState({ modalOpen: false })
    }

    render() {
        let formattedDate = this.props.order.date.split('T')[0] + ' ' + this.props.order.date.split('T')[1].split('.')[0]

        const modalTrigger =
            <List.Item onClick={this.handleModalOpen}>
                <List.Icon name='tag' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>{this.props.order.id}</List.Header>
                    <List.Description as='a'>{formattedDate}</List.Description>
                </List.Content>
            </List.Item>

        const items = _.map(this.props.order.products, (productName, idx) => {
            return (
                <Table.Row key={idx}>
                    <Table.Cell>{idx+1}</Table.Cell>
                    <Table.Cell>{productName}</Table.Cell>
                    <Table.Cell>{this.props.order.quantities[idx]}</Table.Cell>
                </Table.Row>
            )
        })

        return (
            <Modal trigger={modalTrigger} open={this.state.modalOpen} onClose={this.handleModalOnClose} closeIcon>
                <Modal.Header>Order Details</Modal.Header>

                <Modal.Content>
                    <Input
                        label={{tag: true, content: 'Delivery Method'}}
                        labelPosition='right'
                        value={this.props.order.delivery_method.charAt(0).toUpperCase() + this.props.order.delivery_method.slice(1)}
                        fluid={true}
                    />

                    <Divider hidden />

                    <Input
                        label={{tag: true, content: 'Payment Method'}}
                        labelPosition='right'
                        value={this.props.order.payment_method.charAt(0).toUpperCase() + this.props.order.payment_method.slice(1)}
                        fluid={true}
                    />

                    <Header as='h3' attached='top'>Product list</Header>
                    <Table striped padded attached>
                        <Table.Header>
                            <Table.Row>
                                <Table.HeaderCell>SN</Table.HeaderCell>
                                <Table.HeaderCell>Product name</Table.HeaderCell>
                                <Table.HeaderCell>Quantity</Table.HeaderCell>
                            </Table.Row>
                        </Table.Header>

                        <Table.Body>
                            {items}
                        </Table.Body>
                    </Table>

                    <Divider />

                    <Button
                        content='Total'
                        icon='dollar'
                        label={{ basic: true, pointing: 'left', content: this.props.order.total_price }}
                    />
                </Modal.Content>
            </Modal>
        )
    }
}

Order.propTypes = {
    order: PropTypes.object.isRequired
}


export default Order
