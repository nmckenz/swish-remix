import React, { Component } from 'react';
import './App.scss';
import axios from 'axios';

class App extends Component {
  // NOTES:
  //   - pull in stats for all 2020 players on app load(using component did mount) from api endpoint("https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2020") and save in state
  //   - user input form to search for player amongst all players saved in state
  //     - we now have player and season stats
  //     - add player to array of user players
  //   - to find match ups:
  //     - user player to get user team
  // - user player team cross reference to api endpoint for 2020 schedules ("https://api.sportsdata.io/v3/nba/scores/json/Games/2020") and search all games, then filter games by user team
  //     - sort user team games by date to find next game and next opponent team
  //     - pull opponent team players from state by filtering for team and filter opponent team players that have matching position to user player


  constructor() {
    super();
    this.state = {
      urlSDIO: "https://api.sportsdata.io/v3/nba/",
      keySDIO: "b89d8f35286d40bea76016a8d3b5a9cd",
      playerSeasonStats: [],
    };
  }

  componentDidMount() {
    // Pull all current player season stats on app load
    this.getAllPlayers();
  };

  //API call for all player season stats
  getAllPlayers = () => {
    axios({
      url: `${this.state.urlSDIO}stats/json/PlayerSeasonStats/2020`,
      method: "GET",
      dataResponse: "json",
      params: {
        key: this.state.keySDIO
      }
    }).then((response) => {
      console.log("all players season stats api response", response)
      this.setState({
        playerSeasonStats: response.data
      })
    }).catch((error) => {
      console.log("Something went wrong while trying to get player stats", error)
    })
  };


  getUserPlayer = (name) => {
    const stringSearchValues = name.toLowerCase().split(' ');
    console.log("string search values", stringSearchValues);
    const matches = this.state.playerSeasonStats.filter(player => {
      stringSearchValues.forEach(name => {
        (player.Name.toLowerCase().includes(name)) ? player : null;
      })
      // not sure if this will work, must test. trying to filter player objects by user name input which may be two words. looking to return player object if either user word matches player object name property
    })

  }


  render() {
    return (
      <div>
        <header>
          <h1>hello world!</h1>
        </header>
      </div>
    );
  }
}

export default App;
