import React from "react";

class DisplayComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.togglePlay = this.togglePlay.bind(this);
    this.reset = this.reset.bind(this);
  }

  togglePlay() {
    this.props.togglePlay();
  }

  reset() {
    this.props.reset();
  }

  render() {
    return (
      <div className="display">
        <div id={"timer-label"}>{this.props.displayText}</div>
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

export default DisplayComp;
