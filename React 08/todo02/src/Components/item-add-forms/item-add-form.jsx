import React, { Component } from "react";
import "./item-add.css";

export default class ItemAddForm extends Component {

    state = {
        label: "",
        important: false
    };

    onLabelChange = (event) => {
        this.setState({
            label: event.target.value
        });
    };

    onMarkImportant = () => {
        this.setState(({ important }) => ({
            important: !important
        }));
    };

    onSubmit = (event) => {
        event.preventDefault();

        this.props.onItemAdded(this.state.label, this.state.important);

        this.setState({
            label: "",
            important: false
        });
    };

    render() {

        const importantBtnClass = this.state.important
            ? "btn btn-success btn-sm important-mark"
            : "btn btn-outline-success btn-sm important-mark";

        return (
            <form className="item-add-form d-flex" onSubmit={this.onSubmit}>

                <input
                    type="text"
                    className="form-control"
                    placeholder="Введите название"
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />

                <button
                    type="button"
                    className={importantBtnClass}
                    onClick={this.onMarkImportant}
                >
                    <i className="fa fa-exclamation" />
                </button>

                <button
                    className="btn btn-outline-secondary"
                >
                    Add Item
                </button>
            </form>
        );
    }
}
