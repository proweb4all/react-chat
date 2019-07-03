import React, {Component} from 'react';

export default class Clock extends Component {
    // constructor() {
    //     super();
    //     this.state = {
    //         time: new Date()
    //     }
    // }
    state = {
        time: new Date()
    }
    componentDidMount() {
        this.interval = setInterval(() => this.tick(), 1000);
    }
    componentWillUnmount() {
        clearInterval(this.interval);
    }
    tick() {
        this.setState({
            time: new Date()
        })
    }
    render() {
        const {time} = this.state;
        return (
            <p>{time.toLocaleTimeString()}</p>
        )
    }
}
