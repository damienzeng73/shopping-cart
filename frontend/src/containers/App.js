import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Container } from 'semantic-ui-react'
import { Switch, Route, withRouter } from 'react-router-dom'

import './App.css'
import Navbar from '../components/Navbar'
import ShoppingPage from './ShoppingPage'
import CartPage from './CartPage'
import AccountPage from './AccountPage'
import { filterProducts } from '../actions/Products'

const Main = () => {
    return (
        <main>
            <Switch>
                <Route exact path='/' component={ShoppingPage} />
                <Route path='/cart' component={CartPage} />
                <Route path='/account' component={AccountPage} />
            </Switch>
        </main>
    )
}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showSearch: true
        }
    }

    componentWillReceiveProps(newProps) {
        if (this.props.history.location.pathname !== '/') {
            this.setState({ showSearch: false })
        } else {
            this.setState({ showSearch: true })
        }
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar
                        showSearch={this.state.showSearch}
                        itemsInCartCount={this.props.itemsInCartCount}
                        products={this.props.products}
                        filterProducts={this.props.filterProducts}
                    />
                </Container>

                <Container id='content-wrapper'>
                    <Main />
                </Container>
            </div>
        )
    }
}

App.propTypes = {
    itemsInCartCount: PropTypes.number.isRequired,
    products: PropTypes.array,
    filterProducts: PropTypes.func.isRequired
}

const mapStateToProps = (state) => {
    return {
        itemsInCartCount: state.cart.length,
        products: state.products.data
    }
}


export default withRouter(connect(mapStateToProps, { filterProducts })(App))
