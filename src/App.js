import React from "react";
import "./App.css";
import Wheel from "./Wheel";
import Screen from "./Screen";

//main app class
class App extends React.Component {
  //constructor that includes all the essential state vales
  constructor() {
    super();
    this.state = {
      active: 1,  //to tell which menu item is currently active
      screen: 1,  //to tell which screen is currently active
      max: 6,     //to tell the total number of menu items
      song: null, //current song to play
      play: true, //if the song is playing or pause
      screenname: null  //name of the screen trying to access
    };
  }
  //function to move the active menu element to next
  increaseActive = () => {
    //only if it's a menu screen
    if (this.state.screen === 1 || this.state.screen === 2) { 
      //fetch current active element
      var current = document.getElementById("li-" + this.state.active);
      //set it's class as null
      current.className = "";
      //move to next element, or in a loop to the 1st element
      var num = (this.state.active + 1) % this.state.max;
      if (num === 0) {
        num = this.state.max;
      }
      current = document.getElementById("li-" + num);
      current.className = "active";
      //change state to the new next element
      this.setState({
        active: num,
      });
    }
  };
  //function to move the active menu element to the previous one
  decreaseActive = () => {
    //only if it's a menu screen
    if (this.state.screen === 1 || this.state.screen === 2) { 
      //fetch the current active element
      var current = document.getElementById("li-" + this.state.active);
      //set it's class null
      current.className = "";
      //move to the previous element, or in a loop to the last element
      var num = this.state.active - 1;
      if (num === 0) {
        num = this.state.max;
      }
      current = document.getElementById("li-" + num);
      current.className = "active";
      //change the state to the new element
      this.setState({
        active: num,
      });
    }
  };
  //when select button is clicked, this function is called
  selection = () => {
    var current = document.getElementById("li-" + this.state.active);
    //works only if it's a menu screen
    if (this.state.screen === 1 || this.state.screen === 2) { 
      //accessing music menu
      if (current.innerHTML === "Music") {  
        this.setState({
          active: 1,
          screen: 2,
          max: 2,
        });
      }
      //accessing a song 
      else if (current.innerHTML === "Cupid - Fifty Fifty") {
        this.setState({
          screen: 3,
          song: require("./audio/cupid.mp3"),
        });
      } else if (current.innerHTML === "That's Hilarious - Charlie Puth") {
        this.setState({
          screen: 3,
          song: require("./audio/hilarious.mp3"),
        });
      }
      // when any other screen is tried to access, open the default screen
      else {
        this.setState({
          screen: 4,
          screenname: current.innerHTML
        })
      }
    }
  };
  //when menu button is clicked
  openMenu = () => {
    this.setState({
      screen: 1,
      max: 6,
    });
  };
  //when play-pause button is clicked
  clickPlay = () => {
    if (this.state.screen === 3) {
      //fetch audio element
      const audio = document.getElementById("audio");
      //if state.play=true, then music is playing, we must pause it
      if (this.state.play) {
        audio.pause();
        this.setState({
          play: false,
        });
      } 
      //else the music is pause, we must play it
      else {
        audio.play();
        this.setState({
          play: true,
        });
      }
    }
  };
  //when fast forward button is clicked
  clickFastForward = () => {
    if (this.state.screen === 3) {
      const audio = document.getElementById("audio");
      audio.currentTime += 10.0;
    }
  };
  //when fast rewind button is clicked
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
