import React from "react";
import HeaderComp from "./components/HeaderComp";
import FooterComp from "./components/FooterComp";
import PomodoroComp from "./components/PomodoroComp";

import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <HeaderComp
          text={"FCC: Front End Libraries - Project 5, Pomodoro Clock"}
        />
        <PomodoroComp />
        <FooterComp text={"\u00A9 2020 Mahmoud Mheisen"} />
      </div>
    );
  }
}

export default App;
