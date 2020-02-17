import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Swal from 'sweetalert2';

class Header extends Component {
    constructor() {
        super();
        this.state = {
            userInput: ""
        };
    };

    handleChangePlayerInput = (event) => {
        this.setState({
            userInput: event.target.value
        });
    };
    
    render() {
        return (
            <header>
                {/* Hero banner */}
                <div className="hero">
                    <div className="heroContent">
                        <h1>swish</h1>
                    </div>
                </div>
                {/* Inputs for building fantasy team */}
                <fieldset>
                    <legend>build your fantasy team</legend>
                    <form onSubmit={(event) => {
                        event.preventDefault();
                        if (this.state.userInput === "") {
                            Swal.fire({
                                text: "Please enter a first or last name of an NBA player",
                                icon: "error"
                            });
                        } else {
                            this.props.searchFunction(this.state.userInput);
                        }
                    }} >
                        <label htmlFor="searchInput" className="visuallyHidden">search for a player</label>
                        <input type="text" name="searchInput" id="searchInput" onChange={this.handleChangePlayerInput} placeholder="search for a player" />
                        <button type="submit">let's NBA!</button>
                    </form>
                </fieldset>
            </header>
        )
    }
}

export default Header;