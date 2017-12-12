import React from 'react'
import PropTypes from 'prop-types'
import { Modal, List, Divider, Input, Label, Form, TextArea, Image, Button, Confirm } from 'semantic-ui-react'

class SelfProduct extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            category: this.props.product.category,
            name: this.props.product.name,
            price: this.props.product.price,
            quantity: this.props.product.quantity,
            description: this.props.product.description,
            imageUrl: this.props.product.image_url,
            modalOpen: false,
            confirmOpen: false
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this)
        this.handleModalOpen = this.handleModalOpen.bind(this)
        this.handleModalOnClose = this.handleModalOnClose.bind(this)
        this.handleDeleteConfirmOpen = this.handleDeleteConfirmOpen.bind(this)
        this.handleDeleteConfirmCancel = this.handleDeleteConfirmCancel.bind(this)
        this.handleDeleteConfirm = this.handleDeleteConfirm.bind(this)
    }

    handleOnChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleUpdateProduct() {
        this.props.updateProduct(this.props.product.id, this.state)
        this.handleModalOnClose()
    }

    handleModalOpen() {
        this.setState({ modalOpen: true })
    }

    handleModalOnClose() {
        this.setState({ modalOpen: false })
    }

    handleDeleteConfirmOpen() {
        this.setState({ confirmOpen: true })
    }

    handleDeleteConfirmCancel() {
        this.setState({ confirmOpen: false })
    }

    handleDeleteConfirm() {
        this.props.deleteProduct(this.props.product.id, this.props.product.name)
        this.setState({ modalOpen: false, confirmOpen: false })
    }

    render() {
        const modalTrigger =
            <List.Item onClick={this.handleModalOpen}>
                <List.Icon name='bookmark' size='large' verticalAlign='middle' />
                <List.Content>
                    <List.Header as='a'>{this.state.name}</List.Header>
                </List.Content>
            </List.Item>

        return (
            <Modal trigger={modalTrigger} open={this.state.modalOpen} onClose={this.handleModalOnClose} closeIcon>
                <Modal.Header>Manage product</Modal.Header>

                <Modal.Content scrolling>
                    <Input
                        label={{ tag: true, content: 'Category' }}
                        labelPosition='right'
                        name='category'
                        value={this.state.category}
                        fluid={true}
                        onChange={this.handleOnChange}
                    />

                    <Divider hidden />

                    <Input
                        label={{ tag: true, content: 'Product name' }}
                        labelPosition='right'
                        name='name'
                        value={this.state.name}
                        fluid={true}
                        onChange={this.handleOnChange}
                    />

                    <Divider hidden />

                    <Input
                        label={{ tag: true, content: 'Price' }}
                        labelPosition='right'
                        name='price'
                        value={this.state.price}
                        fluid={true}
                        onChange={this.handleOnChange}
                    />

                    <Divider hidden />

                    <Input
                        label={{ tag: true, content: 'Available quantity' }}
                        labelPosition='right'
                        type='number'
                        min='0'
                        name='quantity'
                        value={this.state.quantity}
                        fluid={true}
                        onChange={this.handleOnChange}
                    />

                    <Divider hidden />

                    <Form>
                        <Label size='large' attached='top right' tag>Product description</Label>
                        <TextArea
                            name='description'
                            value={this.state.description}
                            onChange={this.handleOnChange}
                        />
                    </Form>

                    <Divider hidden />

                    <Input
                        label={{ tag: true, content: 'Image URL' }}
                        labelPosition='right'
                        name='imageUrl'
                        value={this.state.imageUrl}
                        fluid={true}
                        onChange={this.handleOnChange}
                    />

                    <Divider />

                    <Image
                        src={this.state.imageUrl}
                        size='medium'
                        centered={true}
                        rounded={true}
                    />
                </Modal.Content>

                <Modal.Actions>
                    <Button
                        color='red'
                        content='Delete'
                        floated='left'
                        onClick={this.handleDeleteConfirmOpen}
                    />

                    <Confirm
                        open={this.state.confirmOpen}
                        onConfirm={this.handleDeleteConfirm}
                        onCancel={this.handleDeleteConfirmCancel}
                        confirmButton='Delete'
                    />

                    <Button
                        primary={true}
                        content='Update'
                        onClick={this.handleUpdateProduct}
                    />
                </Modal.Actions>
            </Modal>
        )
    }
}

SelfProduct.propTypes = {
    product: PropTypes.object.isRequired,
    updateProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
}


export default SelfProduct
