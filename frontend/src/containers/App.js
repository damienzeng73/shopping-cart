import React from 'react'
import { Container } from 'semantic-ui-react'
import axios from 'axios'

import './App.css'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        axios.get('/api/products')
            .then((res) => {
                this.setState({ products: res.data })
            })
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar />
                </Container>

                <Container id='content-wrapper'>
                    <ProductList products={this.state.products} />
                </Container>
            </div>
        )
    }
}


export default App
