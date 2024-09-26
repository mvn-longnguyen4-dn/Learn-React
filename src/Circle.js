import React from 'react';

class Circle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "number" : this.props.number,
            "isCount" : false,
            "styleCircle" : this.props.styleCircle
        };
        this.isCountDown = this.isCountDown.bind(this);
        this.interval = null;
    }
    componentDidMount() {
        this.isCountDown();
    };

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    isCountDown = () => {
        const notCount = !this.state.isCount
        this.setState({
            isCount: notCount
        });
        if (notCount) {
          this.timer = setInterval(this.countDown, 1000);
        } else {
          clearInterval(this.timer);
        }
      }  
      countDown = () => {
        var newCount = this.state.number - 1 
        if (newCount < 0) {
          clearInterval(this.timer)
        } else {
          this.setState({number: newCount});
        }
      }

    render() {
        return (
            <div className="container">
                <div>
                    <button className="count-btn" onClick={this.isCountDown}>{this.state.isCount ? "Stop" : "Start"}</button>
                </div>
                <div className="circle" style={this.state.styleCircle}>
                    <span>{this.state.number}</span>
                </div>
            </div>
        )
    }
}

export default Circle;