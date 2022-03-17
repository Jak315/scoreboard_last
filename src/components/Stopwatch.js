import React from 'react'

class Stopwatch extends React.Component {

    state = {
        isRunning: false,
        time: 0
    }

    componentDidMount() {
        this.intervalID = setInterval(() => this.tick(), 100)
    }
    tick = () => {
        if (this.state.isRunning) {
            this.setState(prevState => ({
                time: prevState.time += 1
            }))
        }
    }

    handleStopwatch = () => {
        this.setState(prevState => ({
            isRunning: !prevState.isRunning
        }))
    }

    resetTime = () => {
        this.setState({ isRunning: false, time: 0 })
    }
    render() {
        return (
            <div className="stopwatch">
                <h2>Stopwatch</h2>
                <span className='stopwatch-time'>{this.state.time}</span>
                <button onClick={this.handleStopwatch}>
                    {this.state.isRunning ? 'Stop' : 'Start'}
                </button>
                <button onClick={this.resetTime}>Reset</button>
            </div>
        )
    }
}

export default Stopwatch