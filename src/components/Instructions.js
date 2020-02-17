import React from 'react';

function Instructions(props) {
    return(
        <section class="welcomeInstructions">
            <div class="instructionsContent">
                <div id="closeHelp" class="closeHelp"><i class="fas fa-times-circle"></i></div>
                <h1>swish</h1>
                <div class="wrapper">
                    <h2>welcome to swish! </h2>
                    <h3>your place for getting information on your fantasy player matchups</h3>
                    <p>swish is an application which provides you the best information on upcoming matchups for your fantasy players and empowers you to make the winning choices!</p>
                    <ul>
                        <li><p>from the dashboard, search for your fantasy players and select your player from the search results</p></li>
                        <li><p>selected players will be added to your team and displayed on the dashboard</p></li>
                        <li><p>once you have entered players into your team, select any one of your players from the dashboard to be presented with the
                    latests stats on their next upcoming opponent</p></li>
                    </ul>
                    <p>ready to start? either select begin to start building your own team or select demo to get a feel for Swish and what it can provide before you start</p>
                    <button id="begin">begin</button>
                    <button id="demo">demo</button>
                </div>
            </div>
        </section>
    )
}

export default Instructions;