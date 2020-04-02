import React from "react";

class ControlComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.value
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      this.setState({
        counter: nextProps.value
      });
      nextProps.resetBack();
    }
  }

  increment() {
    if (!(this.state.counter >= 60)) {
      this.setState(state => ({
        counter: state.counter++
      }));

      this.props.getTime({
        type: this.props.type,
        time: this.state.counter + 1
      });
    }
  }

  decrement() {
    if (!(this.state.counter <= 0)) {
      this.setState(state => ({
        counter: state.counter--
      }));

      this.props.getTime({
        type: this.props.type,
        time: this.state.counter - 1
      });
    }
  }

  render() {
    return (
      <div className={this.props.controlClass + " control"}>
        <div id={this.props.id}>{this.props.text}</div>
        <div onChange={this.sendValue} id={this.props.valueID}>
          {this.state.counter}
        </div>
        <button onClick={this.increment} id={this.props.btn1ID}>
          <i className="fas fa-arrow-alt-circle-up fa-2x icon"></i>
        </button>
        <button onClick={this.decrement} id={this.props.btn2ID}>
          <i className="fas fa-arrow-alt-circle-down fa-2x icon"></i>
        </button>
      </div>
    );
  }
}

export default ControlComp;
