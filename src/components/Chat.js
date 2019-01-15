import {Component} from "react";
import React from "react";
import moment from "moment";
import ChatInput from "./ChatInput";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            messages: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.setState(prevState => {
                return {
                    messages: prevState.messages.concat(
                        moment().calendar() + " :" + this.state.value)
                }
            }
        );
        event.preventDefault();
    }


    render() {
        return (<div>
            {this.state.messages.map(msg =>
                <ul key={msg}>{msg}</ul>)}
            <ChatInput handleSubmit={this.handleSubmit} handleChange={this.handleChange}
                       value={this.state.value}/>
        </div>)
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
}
