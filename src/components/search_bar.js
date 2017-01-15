import React, { Component } from 'react';

class SearchBar extends Component {
	constructor (props) {
    super(props);
    this.state = {
      input: ''
    };
	}
	render () {
    console.log(this.state.input)
		return (
      <div>
        <input
          value={this.state.input}
          onChange={event => this.setState({input: event.target.value})}
        />
      </div>
    )
	}
}

export default SearchBar;
