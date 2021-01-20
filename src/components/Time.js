import React, { Component } from "react";

class Time extends Component {
    constructor(){
        super()
        this.state={time: new Date()}
    }
    currenttime()
    {
        this.setState({
            time: new Date()
        })
    }
    render() {
        return (
            <h1>
                {this.state.time.toLocaleTimeString()}
            </h1>
        )
    }
}
export default Time;