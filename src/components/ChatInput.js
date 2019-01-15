import React from "react";

export default function ChatInput(props) {
    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">🐱</span>
            </div>
            <form onSubmit={props.handleSubmit}>
                <input type="text" value={props.value}
                       onChange={props.handleChange} className="form-control"
                       aria-label="With textarea"/>
            </form>
        </div>
    )
}
