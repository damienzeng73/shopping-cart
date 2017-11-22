import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import './App.css'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import { fetchProducts } from '../actions/Products'
import { addToCart } from '../actions/Cart'

class App extends React.Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar itemsInCartCount={this.props.itemsInCartCount} />
                </Container>

                <Container id='content-wrapper'>
                    <ProductList products={this.props.products} addToCart={this.props.addToCart} />
                </Container>
            </div>
        )
    }
}

App.propTypes = {
    itemsInCartCount: PropTypes.number.isRequired,
    products: PropTypes.array,
    fetchProducts: PropTypes.func.isRequired,
    addToCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products.data,
        itemsInCartCount: state.cart.length
    }
}


export default connect(mapStateToProps, { fetchProducts, addToCart })(App)
