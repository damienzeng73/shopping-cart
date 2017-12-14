import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import _ from 'lodash'

import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            className: '',
            initialProducts: []
        }

        this.handleOnScroll = this.handleOnScroll.bind(this)
        this.handleSearchItems = this.handleSearchItems.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll)
    }

    componentWillReceiveProps(newProps) {
        if (newProps.products.length > this.state.initialProducts) {
            this.setState({ initialProducts: newProps.products })
        }
    }

    handleOnScroll(e) {
        let className = ''
        if (e.pageY > 0) {
            className = 'small'
        }

        this.setState({ className })
    }

    handleSearchItems(e) {
        let filteredProducts = _.filter(this.state.initialProducts, (obj) => {
            return _.includes(obj.name.toLowerCase(), e.target.value.toLowerCase())
        })

        this.props.filterProducts(filteredProducts)
    }

    render() {
        return (
            <Menu id='navbar' className={this.state.className} size='massive' fixed='top' secondary>
                <Menu.Item id='logo' as={Link} to='/' header>
                    Logo
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input transparent icon={{ name: 'search', link: true }} placeholder='Search...' style={this.props.showSearch ? null : {display: 'none'}} onChange={this.handleSearchItems} />
                    </Menu.Item>

                    <Menu.Item as={Link} to='/cart'>
                        <Icon name='shop' />
                        <Label color='red' floating>{this.props.itemsInCartCount}</Label>
                    </Menu.Item>

                    <Menu.Item as={Link} to='/account'>
                        <Icon name='user' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

Navbar.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    itemsInCartCount: PropTypes.number.isRequired,
    products: PropTypes.array,
    filterProducts: PropTypes.func.isRequired
}


export default Navbar
