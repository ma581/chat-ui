import {Component} from "react";
import React from "react";
import moment from "moment";
import ChatInput from "./ChatInput";

export default class Chat extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            value: "",
            messages: []
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("http://localhost:8080/messages").then(res => res.json())
            .then(result => {
                console.log(JSON.stringify(result));
                    this.setState({
                        isLoaded: true,
                        messages: result
                    })
                },
                error => {
                    this.setState({
                        isLoaded: false,
                        error: error
                    })
                })
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
        const {error, isLoaded, value, messages} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (<div>
                {messages.map(msg =>
                    <ul key={msg.localDateTime}>{msg.localDateTime + " :" + msg.text}</ul>)}
                <ChatInput handleSubmit={this.handleSubmit} handleChange={this.handleChange}
                           value={this.state.value}/>
            </div>)
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
}
