import React from 'react'
import PropTypes from 'prop-types'
import { Button, Divider } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class Confirmation extends React.Component {
    constructor(props) {
        super(props)

        this.submit = this.submit.bind(this)
    }

    submit() {
        this.props.submit()
    }

    render() {
        return (
            <div>
                <Divider />

                <Button.Group floated='right'>
                    <Button primary onClick={(e) => this.props.previousStep()}>Previous step</Button>
                    <Button.Or />
                    <Button color='red' onClick={this.submit} as={Link} to='/'>Place order</Button>
                </Button.Group>
            </div>
        )
    }
}

Confirmation.propTypes = {
    previousStep: PropTypes.func.isRequired,
    submit: PropTypes.func.isRequired
}


export default Confirmation
