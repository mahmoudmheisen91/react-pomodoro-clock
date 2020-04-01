import React from "react";

let ControlComp = props => {
  return (
    <div className={props.controlClass}>
      <div id={props.id}>{props.text}</div>
      <div id={props.valueID}>{props.value}</div>
      <button id={props.btn1ID}>
        <i className="fas fa-arrow-alt-circle-up fa-2x icon"></i>
      </button>
      <button id={props.btn2ID}>
        <i className="fas fa-arrow-alt-circle-down fa-2x icon"></i>
      </button>
    </div>
  );
};

let DisplayComp = props => {
  return (
    <div id="display">
      <div id={"timer-label"}>{"Session"}</div>
      <div id={"time-left"}>{props.timeLeft}</div>
      <button id={"start_stop"}>
        <i class="fas fa-play-circle fa-2x icon"></i>
        <i class="fas fa-pause-circle fa-2x icon"></i>
      </button>
      <button id={"reset"}>
        <i className="fas fa-undo fa-2x icon"></i>
      </button>
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
      <div>
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
        <DisplayComp timeLeft={"00:00"} />
      </div>
    );
  }
}

export default PomodoroComp;
