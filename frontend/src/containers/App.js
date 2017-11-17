import React from 'react'
import { Container } from 'semantic-ui-react'

import './App.css'
import Navbar from '../components/Navbar'
import ProductList from '../components/ProductList'

class App extends React.Component {
    render() {
        return (
            <div>
                <Container fluid>
                    <Navbar />
                </Container>

                <Container id='content-wrapper'>
                    <ProductList />
                </Container>
            </div>
        )
    }
}


export default App
