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

    confirm() {
        var data = [];
        this.props.orderItem.quantity = this.state.quantity;
        var savedobject = JSON.parse(localStorage.getItem("orderedItems"));
        if (savedobject) {
            data = savedobject;
            data.push(this.props.orderItem);
        } else {
            data.push(this.props.orderItem);
        }
        localStorage.setItem('orderedItems', JSON.stringify(data));
        this.setState({ showModal: false });
    },

    handleChange(event) {
        this.setState({ quantity: event.target.value });
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
                        <Modal.Title>{this.props.orderItem.name}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <label>
                            Quantity : <input type="number" name="quantity" onChange={this.handleChange} required/>
                        </label>
                     
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.confirm}>Confim</Button>
                        <Button onClick={this.close}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
});

export default OrderingModal;