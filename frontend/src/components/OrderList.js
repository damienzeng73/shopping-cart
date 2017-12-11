import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import { List } from 'semantic-ui-react'

import Order from './Order'

const OrderList = (props) => {
    let ordersCollection = _.map(props.orders, (order, idx) => {
        return (
            <Order key={idx} order={order} />
        )
    })

    return (
        <List selection divided relaxed>
            {ordersCollection}
        </List>
    )
}

OrderList.propTypes = {
    orders: PropTypes.array
}


export default OrderList
