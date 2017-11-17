import React from 'react'
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
        this.setState({ count: parseInt(e.target.value) })
    }

    handleMinusCount(e) {
        if (this.state.count > 1) {
            this.setState({ count: this.state.count - 1 })
        }
    }

    handleAddCount(e) {
        if (this.state.count < 99) {
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
                            Product 1
                        </Card.Header>

                        <Card.Meta>
                            $100
                        </Card.Meta>
                    </Card.Content>

                    <Card.Content extra>
                        <Rating icon='star' defaultRating={4} maxRating={5} disabled />
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
                                <Header id='product-name' as='h1'>Product</Header>
                                <Header id='price' as='h2'>$100</Header>
                                <Header id='rating' sub>
                                    <Rating icon='star' defaultRating={4} maxRating={5} disabled />
                                </Header>

                                <div id='count'>
                                    <Button icon='minus' size='tiny' onClick={this.handleMinusCount} />
                                    <Input value={this.state.count} onChange={this.handleOnChange} />
                                    <Button icon='add' size='tiny' onClick={this.handleAddCount} />
                                </div>

                                <Divider />

                                <p>Test</p>
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


export default Product
