import React from "react";
import ControlComp from "./ControlComp";

class DisplayComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.togglePlay = this.togglePlay.bind(this);
    this.reset = this.reset.bind(this);
  }

  togglePlay() {}

  reset() {
    this.props.reset();
  }

  render() {
    return (
      <div className="display">
        <div id={"timer-label"}>{"Session"}</div>
        <div id={"time-left"}>{this.props.timeLeft}</div>
        <div className="disp-btn">
          <button onClick={this.togglePlay} id={"start_stop"}>
            <i class="fas fa-play-circle fa-2x icon"></i>
            {/* <i class="fas fa-pause-circle fa-2x icon"></i> */}
          </button>
          <button onClick={this.reset} id={"reset"}>
            <i className="fas fa-undo fa-2x icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

class PomodoroComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minLeft: 25,
      secLeft: 0,
      sessValue: 25,
      brkValue: 5,
      reset: false
    };

    this.timeleftString = this.timeleftString.bind(this);
    this.getTime = this.getTime.bind(this);
    this.reset = this.reset.bind(this);
    this.resetBack = this.resetBack.bind(this);
  }

  timeleftString() {
    let min =
      this.state.minLeft < 10 ? "0" + this.state.minLeft : this.state.minLeft;
    let sec =
      this.state.secLeft < 10 ? "0" + this.state.secLeft : this.state.secLeft;

    return min + ":" + sec;
  }

  getTime(timeLeft) {
    if (timeLeft.type === "S") {
      this.setState({
        minLeft: timeLeft.time
      });
    }
  }

  reset() {
    this.setState({
      minLeft: 25,
      sessValue: 25,
      brkValue: 5,
      reset: true
    });
  }

  resetBack() {
    this.setState({
      reset: false
    });
  }

  render() {
    return (
      <div id="pomodoro">
        <ControlComp
          controlClass={"BreakControl"}
          id={"break-label"}
          text={"Break Length"}
          valueID={"break-length"}
          value={this.state.brkValue}
          reset={this.state.reset}
          resetBack={this.resetBack}
          type={"B"}
          getTime={this.getTime}
          btn1ID={"break-increment"}
          btn2ID={"break-decrement"}
          btn1Text={"+inc"}
          btn2Text={"-dec"}
        />

        <DisplayComp timeLeft={this.timeleftString()} reset={this.reset} />

        <ControlComp
          controlClass={"SessionControl"}
          id={"session-label"}
          text={"Session Length"}
          valueID={"session-length"}
          value={this.state.sessValue}
          reset={this.state.reset}
          resetBack={this.resetBack}
          type={"S"}
          getTime={this.getTime}
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
