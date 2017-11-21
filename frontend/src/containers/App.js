import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'

import './App.css'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'
import { fetchProducts } from '../actions/Products'

class App extends React.Component {
    componentDidMount() {
        this.props.fetchProducts()
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar />
                </Container>

                <Container id='content-wrapper'>
                    <ProductList products={this.props.products} />
                </Container>
            </div>
        )
    }
}

App.propTypes = {
    products: PropTypes.array.isRequired,
    fetchProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        products: state.products.data
    }
}


export default connect(mapStateToProps, { fetchProducts })(App)
