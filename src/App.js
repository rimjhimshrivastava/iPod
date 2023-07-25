import React from "react";
import "./App.css";
import Wheel from "./Wheel";
import Screen from "./Screen";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      active: 1,
      screen: 1,
      max: 6,
      song: null,
      play: true,
      screenname: null
    };
  }
  increaseActive = () => {
    if (this.state.screen === 1 || this.state.screen === 2) {
      var current = document.getElementById("li-" + this.state.active);
      current.className = "";
      var num = (this.state.active + 1) % this.state.max;
      if (num === 0) {
        num = this.state.max;
      }
      current = document.getElementById("li-" + num);
      current.className = "active";
      this.setState({
        active: num,
      });
    }
  };
  decreaseActive = () => {
    if (this.state.screen === 1 || this.state.screen === 2) {
      var current = document.getElementById("li-" + this.state.active);
      current.className = "";
      var num = this.state.active - 1;
      if (num === 0) {
        num = this.state.max;
      }
      current = document.getElementById("li-" + num);
      current.className = "active";
      this.setState({
        active: num,
      });
    }
  };
  selection = () => {
    var current = document.getElementById("li-" + this.state.active);
    if (this.state.screen === 1 || this.state.screen === 2) {
      if (current.innerHTML === "Music") {
        this.setState({
          active: 1,
          screen: 2,
          max: 2,
        });
      } else if (current.innerHTML === "Cupid - Fifty Fifty") {
        this.setState({
          screen: 3,
          song: require("./audio/cupid.mp3"),
        });
      } else if (current.innerHTML === "That's Hilarious - Charlie Puth") {
        this.setState({
          screen: 3,
          song: require("./audio/hilarious.mp3"),
        });
      } else {
        this.setState({
          screen: 4,
          screenname: current.innerHTML
        })
      }
    }
  };
  openMenu = () => {
    this.setState({
      screen: 1,
      max: 6,
    });
  };
  clickPlay = () => {
    if (this.state.screen === 3) {
      const audio = document.getElementById("audio");
      if (this.state.play) {
        audio.pause();
        this.setState({
          play: false,
        });
      } else {
        audio.play();
        this.setState({
          play: true,
        });
      }
    }
  };
  clickFastForward = () => {
    if (this.state.screen === 3) {
      const audio = document.getElementById("audio");
      audio.currentTime += 10.0;
    }
  };
  clickFastRewind = () => {
    if (this.state.screen === 3) {
      const audio = document.getElementById("audio");
      audio.currentTime -= 10.0;
    }
  };
  render() {
    return (
      <div className="App">
        <div className="upper-half">
          <Screen 
          screen={this.state.screen}
          song={this.state.song}
          screenname={this.state.screenname}
          />
        </div>
        <div className="bottom-half">
          <Wheel
            increaseActive={this.increaseActive}
            decreaseActive={this.decreaseActive}
            selection={this.selection}
            openMenu={this.openMenu}
            clickPlay={this.clickPlay}
            clickFastForward={this.clickFastForward}
            clickFastRewind={this.clickFastRewind}
          />
        </div>
      </div>
    );
  }
}

export default App;
