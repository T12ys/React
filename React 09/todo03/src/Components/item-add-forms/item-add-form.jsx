import React, {Component} from 'react';

import './item-add.css';

export default class ItemAddForm extends Component {
    state = {
        label:''
    }
    onLabelChange = (e)=>{
        this.setState({
            label:e.target.value
        })
    }

    onSubmit = (e)=>{
        e.preventDefault();
        const {label} = this.state;
        this.setState({label:''});
        const cb = this.props.onItemAdded || (()=>{})
        cb(label)
    }
    render() {
        return (
            <form
                className="bottom-panel d-flex"
                onSubmit={this.onSubmit}>
                <input
                    type="text"
                    className="form-control new-todo-label"
                    value={this.state.label}
                    onChange={this.onLabelChange}
                />
                <div className="item-add-form">
                    <button
                        className="btn btn-outline-secondary"
                    >
                        Add Item
                    </button>
                </div>
            </form>
        )
    }
}