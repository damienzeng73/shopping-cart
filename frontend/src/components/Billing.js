import React from 'react'
import PropTypes from 'prop-types'
import { Segment, Form, Button, Divider, Header } from 'semantic-ui-react'

class Billing extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            paymentMethod: 'debit card'
        }

        this.nextStep = this.nextStep.bind(this)
        this.handleRadioOnChange = this.handleRadioOnChange.bind(this)
    }

    componentWillMount() {
        if ('data' in this.props.billing) {
            this.setState({ paymentMethod: this.props.billing.data.paymentMethod })
        }
    }

    nextStep() {
        this.props.setBillingOptions(this.state)
        this.props.nextStep()
    }

    handleRadioOnChange(e, obj) {
        this.setState({ paymentMethod: obj.value })
    }

    render() {
        return (
            <div>
                <Segment attached>
                    <Form>
                        <Header as='h3' attched='top'>Payment options</Header>
                        <Segment attached>
                            <Form.Radio
                                name='paymentMethod'
                                value='debit card'
                                label='Debit card'
                                checked={this.state.paymentMethod === 'debit card'}
                                onChange={this.handleRadioOnChange}
                            />

                            <Form.Radio
                                name='paymentMethod'
                                value='credit card'
                                label='Credit card'
                                checked={this.state.paymentMethod === 'credit card'}
                                onChange={this.handleRadioOnChange}
                            />

                            <Form.Radio
                                name='paymentMethod'
                                value='cash on delivery'
                                label='Cash on delivery'
                                checked={this.state.paymentMethod === 'cash on delivery'}
                                onChange={this.handleRadioOnChange}
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

Billing.propTypes = {
    previousStep: PropTypes.func.isRequired,
    nextStep: PropTypes.func.isRequired
}


export default Billing
