import React, { Component } from 'react';
import './App.scss';

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
      urlSDIO: "https://www.balldontlie.io/api/v1",
      keySDIO: "b89d8f35286d40bea76016a8d3b5a9cd",

    };
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
