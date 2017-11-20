import React from 'react'
import PropTypes from 'prop-types'
import { Modal, Card, Image, Rating, Grid, Header, Divider, Button, Input } from 'semantic-ui-react'

import './Product.css'
import img from '../img/item.png'

class Product extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 1
        }

        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleMinusCount = this.handleMinusCount.bind(this)
        this.handleAddCount = this.handleAddCount.bind(this)
    }

    handleOnChange(e) {
        this.setState({ count: parseInt(e.target.value, 10) })
    }

    handleMinusCount(e) {
        if (this.state.count > 1) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    handleAddCount(e) {
        if (this.state.count < this.props.product.quantity) {
            this.setState({ count: this.state.count + 1 })
        }
    }

    render() {
        return (
            <Modal trigger={
                <Card link>
                    <Image src={img} alt='img' />
                    <Card.Content>
                        <Card.Header>
                            {this.props.product.name}
                        </Card.Header>

                        <Card.Meta>
                            ${this.props.product.price}
                        </Card.Meta>
                    </Card.Content>

                    <Card.Content extra>
                        <Rating icon='star' defaultRating={this.props.product.rating} maxRating={5} disabled />
                    </Card.Content>
                </Card>
            }>
                <Modal.Header>Product details</Modal.Header>

                <Modal.Content image>
                    <Grid>
                        <Grid.Column width='6'>
                            <Image src={img} alt='img' wrapped />
                        </Grid.Column>

                        <Grid.Column width='10'>
                            <Modal.Description>
                                <Header id='product-name' as='h1'>{this.props.product.name}</Header>
                                <Header id='price' as='h2'>${this.props.product.price}</Header>
                                <Header id='rating' sub>
                                    <Rating icon='star' defaultRating={this.props.product.rating} maxRating={5} disabled />
                                </Header>

                                <div id='count'>
                                    <Button icon='minus' size='tiny' onClick={this.handleMinusCount} />
                                    <Input value={this.state.count} onChange={this.handleOnChange} />
                                    <Button icon='add' size='tiny' onClick={this.handleAddCount} />
                                    <span>(In stock: {this.props.product.quantity})</span>
                                </div>

                                <Divider />

                                <p>{this.props.product.description}</p>
                            </Modal.Description>
                        </Grid.Column>
                    </Grid>
                </Modal.Content>

                <Modal.Actions>
                    <Button primary content='Add to cart' icon='shop' labelPosition='right' />
                </Modal.Actions>
            </Modal>
        )
    }
}

Product.propTypes = {
    product: PropTypes.object.isRequired
}


export default Product
