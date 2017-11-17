import React from 'react'
import { Card } from 'semantic-ui-react'

import Product from './Product'

const ProductList = () => {
    return (
        <Card.Group itemsPerRow={4}>
            <Product />
        </Card.Group>
    )
}


export default ProductList
