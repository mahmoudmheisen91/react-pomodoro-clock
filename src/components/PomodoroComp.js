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

  increment() {
    if (!(this.state.counter >= 60)) {
      this.setState(state => ({
        counter: state.counter++
      }));
    }
  }

  decrement() {
    if (!(this.state.counter <= 0)) {
      this.setState(state => ({
        counter: state.counter--
      }));
    }
  }

  render() {
    return (
      <div className={this.props.controlClass + " control"}>
        <div id={this.props.id}>{this.props.text}</div>
        <div id={this.props.valueID}>{this.state.counter}</div>
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

let DisplayComp = props => {
  return (
    <div className="display">
      <div id={"timer-label"}>{"Session"}</div>
      <div id={"time-left"}>{props.timeLeft}</div>
      <div className="disp-btn">
        <button id={"start_stop"}>
          <i class="fas fa-play-circle fa-2x icon"></i>
          {/* <i class="fas fa-pause-circle fa-2x icon"></i> */}
        </button>
        <button id={"reset"}>
          <i className="fas fa-undo fa-2x icon"></i>
        </button>
      </div>
    </div>
  );
};

class PomodoroComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div id="pomodoro">
        <ControlComp
          controlClass={"BreakControl"}
          id={"break-label"}
          text={"Break Length"}
          valueID={"break-length"}
          value={5}
          btn1ID={"break-increment"}
          btn2ID={"break-decrement"}
          btn1Text={"+inc"}
          btn2Text={"-dec"}
        />

        <DisplayComp timeLeft={"00:00"} />

        <ControlComp
          controlClass={"SessionControl"}
          id={"session-label"}
          text={"Session Length"}
          valueID={"session-length"}
          value={25}
          btn1ID={"session-increment"}
          btn2ID={"session-decrement"}
          btn1Text={"+inc"}
          btn2Text={"-dec"}
        />
      </div>
    );
  }
}

export default PomodoroComp;
