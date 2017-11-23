import React from 'react'
import PropTypes from 'prop-types'
import { Menu, Input, Icon, Label } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import './Navbar.css'

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            className: ''
        }

        this.handleOnScroll = this.handleOnScroll.bind(this)
        this.handleItemOnClick = this.handleItemOnClick.bind(this)
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleOnScroll)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleOnScroll)
    }

    handleOnScroll(e) {
        let className = ''
        if (e.pageY > 0) {
            className = 'small'
        }

        this.setState({ className })
    }

    handleItemOnClick(e, obj) {
    }

    render() {
        return (
            <Menu id='navbar' className={this.state.className} size='massive' fixed='top' secondary>
                <Menu.Item id='logo' as={Link} to='/' header>
                    Logo
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input transparent icon={{ name: 'search', link: true }} placeholder='Search...' />
                    </Menu.Item>

                    <Menu.Item as={Link} to='/cart' onClick={this.handleItemOnClick}>
                        <Icon name='shop' />
                        <Label color='red' floating>{this.props.itemsInCartCount}</Label>
                    </Menu.Item>

                    <Menu.Item as={Link} to='/account' onClick={this.handleItemOnClick}>
                        <Icon name='user' />
                    </Menu.Item>
                </Menu.Menu>
            </Menu>
        )
    }
}

Navbar.propTypes = {
    itemsInCartCount: PropTypes.number.isRequired
}


export default Navbar
