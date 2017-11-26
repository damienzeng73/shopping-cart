import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Form, Button, Divider, Header } from 'semantic-ui-react'

class Shipping extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            deliveryMethod: 'direct shipping',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            country: '',
            address: ''
        }

        this.nextStep = this.nextStep.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)
        this.handleRadioOnChange = this.handleRadioOnChange.bind(this)
        this.handleSelectOnChange = this.handleSelectOnChange.bind(this)
    }

    nextStep() {
        this.props.setShippingOptions(this.state)
        this.props.nextStep()
    }

    handleOnChange(e) {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleRadioOnChange(e, obj) {
        this.setState({ deliveryMethod: obj.value })
    }

    handleSelectOnChange(e, obj) {
        this.setState({ country: obj.value })
    }

    render() {
        let countryOptions = [
            {key: 'japan', value: 'japan', flag: 'jp', text: 'Japan'},
            {key: 'south korea', value: 'south korea', flag: 'kr', text: 'South Korea'},
            {key: 'taiwan', value: 'taiwan', flag: 'tw', text: 'Taiwan'},
            {key: 'uk', value: 'uk', flag: 'gb', text: 'United Kingdom'},
            {key: 'usa', value: 'usa', flag: 'us', text: 'United States'}
        ]
        
        return (
            <div>
                <Segment attached>
                    <Form>
                        <Header as='h3' attached='top'>Delivery options</Header>

                        <Segment attached>
                            <Form.Radio
                                name='deliveryMethod'
                                value='direct shipping'
                                label='Direct shipping'
                                checked={this.state.deliveryMethod === 'direct shipping'}
                                onChange={this.handleRadioOnChange}
                            />

                            <Form.Radio
                                name='deliveryMethod'
                                value='drop shipping'
                                label='Drop shipping'
                                checked={this.state.deliveryMethod === 'drop shipping'}
                                onChange={this.handleRadioOnChange}
                            />

                            <Form.Radio
                                name='deliveryMethod'
                                value='in-store pickup'
                                label='In-store pickup'
                                checked={this.state.deliveryMethod === 'in-store pickup'}
                                onChange={this.handleRadioOnChange}
                            />
                        </Segment>

                        <Header as='h3' attached='top'>Details of recipients</Header>
                        <Segment attached>
                            <Form.Input
                                name='firstName'
                                value={this.state.firstName}
                                label='First Name'
                                placeholder='First Name'
                                onChange={this.handleOnChange}
                            />

                            <Form.Input
                                name='lastName'
                                value={this.state.lastName}
                                label='Last Name'
                                placeholder='Last Name'
                                onChange={this.handleOnChange}
                            />

                            <Form.Input
                                name='phoneNumber'
                                value={this.state.phoneNumber}
                                label='Phone Number'
                                placeholder='Phone Number'
                                onChange={this.handleOnChange}
                            />

                            <Form.Select
                                value={countryOptions[this.state.country]}
                                label='Country'
                                placeholder='Country'
                                options={countryOptions}
                                onChange={this.handleSelectOnChange}
                            />

                            <Form.Input
                                name='address'
                                value={this.state.address}
                                label='Address'
                                placeholder='Address'
                                onChange={this.handleOnChange}
                            />
                        </Segment>
                    </Form>
                </Segment>

                <Divider />

                <Button.Group floated='right'>
                    <Button primary onClick={(e) => this.props.previousStep()}>Previous step</Button>
                    <Button.Or />
                    <Button color='red' onClick={this.nextStep}>Next step</Button>
                </Button.Group>
            </div>
        )
    }
}

Shipping.propTypes = {
    previousStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
}


export default Shipping
