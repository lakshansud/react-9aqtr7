import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams
} from "react-router-dom";
import * as ReactBootstrap from 'react-bootstrap';
var Button = ReactBootstrap.Button;
var Modal = ReactBootstrap.Modal;
var createReactClass = require('create-react-class');

const OrderingModal = createReactClass({
  
    getInitialState() {
        return { showModal: false };
    },

    close() {
        this.setState({ showModal: false });
    },

    open() {
        this.setState({ showModal: true });
    },

    render() {

        return (
            <div>
                <Button
                    bsstyle="primary"
                    bssize="large"
                    onClick={this.open}
                >
                    Add to cart
        </Button>

                <Modal show={this.state.showModal} onHide={this.close}>
                    <Modal.Header closeButton>
                        <Modal.Title>{ this.props.orderItem }</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>
                            Quantity : <input type="number" name="quantity" />
                        </label>
                     
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.close}>Confim</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

export default OrderingModal;