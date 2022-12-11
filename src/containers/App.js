import React, { Component } from 'react';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

import { setSearchField } from '../actions';

class App extends Component {
  constructor() {
    super();
    this.state = { robots: [] };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    this.setState({ robots: users });
  }

  // onSearchChange = (event) => {
  //   this.setState({ searchField: event.target.value });
  // };

  render() {
    const { searchField, onSearchChange } = this.props;
    const filteredRobots = this.state.robots.filter((robot) => {
      return robot.name.toLocaleLowerCase().includes(searchField.toLowerCase());
    });

    if (!this.state.robots.length) {
      return <h1>Loading...</h1>;
    } else {
      return (
        <div className="tc">
          <h1 className="f1">RoboFriends</h1>
          <SearchBox searchChange={onSearchChange} />
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filteredRobots} />
            </ErrorBoundry>
          </Scroll>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return { searchField: state.searchField };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onSearchChange: (event) => {
      dispatch(setSearchField(event.target.value));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
