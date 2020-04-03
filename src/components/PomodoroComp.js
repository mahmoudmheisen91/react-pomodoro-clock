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
            {!this.props.pause ? (
              <i class="fas fa-play-circle fa-2x icon"></i>
            ) : (
              <i class="fas fa-pause-circle fa-2x icon"></i>
            )}
          </button>
          <button onClick={this.reset} id={"reset"}>
            <i className="fas fa-undo fa-2x icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

class ControlComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: this.props.value,
    };

    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.reset) {
      this.setState({
        counter: nextProps.value,
      });
      nextProps.resetBack();
    }
  }

  increment() {
    if (!(this.state.counter >= 60)) {
      this.setState((state) => ({
        counter: state.counter++,
      }));

      this.props.getTime({
        type: this.props.type,
        time: this.state.counter + 1,
      });
    }
  }

  decrement() {
    if (!(this.state.counter <= 1)) {
      this.setState((state) => ({
        counter: state.counter--,
      }));

      this.props.getTime({
        type: this.props.type,
        time: this.state.counter - 1,
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

class PomodoroComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      minLeft: 25,
      secLeft: 0,
      sessValue: 25,
      brkValue: 5,
      reset: false,
      play: false,
      pause: false,
      session: true,
      displayText: "Session",
      idVar: "",
      flipped: false,
    };

    this.timeLeftString = this.timeLeftString.bind(this);
    this.getTime = this.getTime.bind(this);
    this.togglePlay = this.togglePlay.bind(this);
    this.reset = this.reset.bind(this);
    this.resetBack = this.resetBack.bind(this);
    this.startTimer = this.startTimer.bind(this);
    this.stopTimer = this.stopTimer.bind(this);
    this.playSound = this.playSound.bind(this);
    this.rewind = this.rewind.bind(this);
  }

  timeLeftString() {
    let min =
      this.state.minLeft < 10 ? "0" + this.state.minLeft : this.state.minLeft;
    let sec =
      this.state.secLeft < 10 ? "0" + this.state.secLeft : this.state.secLeft;

    return min + ":" + sec;
  }

  getTime(timeLeft) {
    if (timeLeft.type === "S") {
      this.setState({
        minLeft: timeLeft.time,
        secLeft: 0,
        sessValue: timeLeft.time,
      });
    } else if (timeLeft.type === "B") {
      this.setState({
        brkValue: timeLeft.time,
      });
    }
  }

  togglePlay() {
    if (!this.state.play) {
      this.startTimer();
      this.setState({
        play: true,
      });
    } else {
      this.stopTimer();
      this.setState({
        play: false,
      });
    }
  }

  startTimer() {
    let sec = this.state.secLeft;
    let min = this.state.minLeft;
    if (!this.state.pause) {
      if (!this.state.session) {
        min = this.state.brkValue;
      } else {
        min = this.state.sessValue;
      }
    }

    this.setState({
      idVar: setInterval(() => {
        if (!this.state.flipped) {
          if (sec === 0) {
            sec = 60;
            min--;
          }
          sec--;
        } else {
          this.setState((state) => ({
            flipped: false,
          }));
        }
        if (sec <= 0 && min <= 0) {
          this.setState((state) => ({
            secLeft: 0,
            minLeft: 0,
            session: !state.session,
            flipped: true,
          }));

          if (!this.state.session) {
            min = this.state.brkValue;
            this.setState((state) => ({
              displayText: "Break",
            }));
          } else {
            min = this.state.sessValue;
            this.setState((state) => ({
              displayText: "Session",
            }));
          }
          this.playSound();
        } else {
          this.setState({
            secLeft: sec,
            minLeft: min,
          });
        }
      }, 1000),
    });
  }

  stopTimer() {
    clearInterval(this.state.idVar);
    this.setState((state) => ({
      pause: true,
    }));
  }

  reset() {
    this.setState({
      minLeft: 25,
      secLeft: 0,
      sessValue: 25,
      brkValue: 5,
      reset: true,
      displayText: "Session",
      idVar: "",
      pause: false,
      play: false,
      session: true,
    });
    this.stopTimer();
    this.rewind();
  }

  resetBack() {
    this.setState({
      reset: false,
    });
  }

  playSound() {
    let sound = document.getElementById("beep");
    // sound.volume = this.props.volume;
    sound.currentTime = 0;
    sound.play();
  }

  rewind() {
    let sound = document.getElementById("beep");
    sound.pause();
    sound.currentTime = 0;
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
          running={this.state.play}
        />

        <DisplayComp
          timeLeft={this.timeLeftString()}
          reset={this.reset}
          pause={this.state.play}
          togglePlay={this.togglePlay}
          displayText={this.state.displayText}
        />

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
          running={this.state.play}
        />
        <audio
          id={"beep"}
          src={
            "http://research.spa.aalto.fi/publications/papers/dafx13-impact/sounds/out_L.wav"
          }
        ></audio>
      </div>
    );
  }
}

export default PomodoroComp;
