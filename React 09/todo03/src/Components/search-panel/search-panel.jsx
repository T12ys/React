import "./search-panel.css"
import React, {Component} from "react";
export default class SearchPanel extends React.Component {
    state = {
        term:''
    }

    onTermChange = (e) => {
        const {onSearchChange = ()=>{}} = this.props;
        this.setState({term:e.target.value});
        onSearchChange(e.target.value);
    }

    render() {
        return (
            <input type="text"
                   className={"form-control search-input"}
                   placeholder={"Search"}
                   value={this.state.term}
                   onChange={this.onTermChange}
            />
        )
    }

}
