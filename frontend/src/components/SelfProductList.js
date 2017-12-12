import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { List, Message } from 'semantic-ui-react'

import SelfProduct from './SelfProduct'

const SelfProductList = (props) => {
    let productsCollection = _.map(props.products, (product, idx) => {
        return (
            <SelfProduct key={idx} product={product} updateProduct={props.updateProduct} deleteProduct={props.deleteProduct} />
        )
    })

    const noProductsMessage =
        <Message info>
            You don't have any products now.
        </Message>

    return (
        <List size='large' selection divided relaxed>
            {props.products && props.products.length > 0 ? productsCollection : noProductsMessage}
        </List>
    )
}

SelfProductList.propTypes = {
    products: PropTypes.array,
    updateProduct: PropTypes.func.isRequired,
    deleteProduct: PropTypes.func.isRequired
}


export default SelfProductList
