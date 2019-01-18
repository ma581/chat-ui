import React, {Component} from "react";
import moment from "moment";
import ChatInput from "./ChatInput";
import {get} from "./Request";

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

    getMessages() {
        return get("http://localhost:8080/messages").then(res => res.json());
    }

    componentDidMount() {
        this.getMessages()
            .then(result => {
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
                {messages.map(msg => {
                    console.log(msg.localDateTime);
                    return <ul key={msg.localDateTime}>{moment(msg.localDateTime).format('MMMM Do YYYY, h:mm:ss a') + " :" + msg.text}</ul>
                })}

                <ChatInput handleSubmit={this.handleSubmit} handleChange={this.handleChange}
                           value={this.state.value}/>
            </div>)
        }
    }

    handleChange(event) {
        this.setState({value: event.target.value})
    }
}
