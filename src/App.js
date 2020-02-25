import React, { Component } from 'react';

import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      kittens: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ kittens: users }));
  }

  onSearchChange = (e) => {
    this.setState({ searchField: e.target.value });
  }

  render() {
    const { kittens, searchField } = this.state;
    const searchKittens = kittens.filter((kitten) => kitten.name
      .toLowerCase()
      .includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Kittens Rolodex</h1>
        <SearchBox onSearchChange={this.onSearchChange} />
        <CardList kittens={searchKittens} />
      </div>
    );
  }
}

export default App;
