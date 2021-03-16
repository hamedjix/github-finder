import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';
import Alert from './components/users/Alert';
import About from './components/pages/About';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  async componentDidMount() {
    this.setState({ loading: true });
    const response = await axios.get(
      `https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: response.data, loading: false });
  }
  //Search Github Users
  searchUsers = async (text) => {
    const response = await axios.get(
      `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    this.setState({ users: response.data.items, loading: false });
  };
  //Clear Users
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //set Alert
  setAlert = (msg) => {
    this.setState({ alert: { msg } });
    setTimeout(() => this.setState({ alert: null }), 2000);
  };
  render() {
    return (
      <Router>
        <div className='App'>
          <Navbar title='Github Finder' />
          <div className='container'>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path='/'
                render={(props) => (
                  <Fragment>
                    <Search
                      onSearch={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={this.state.users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users users={this.state.users} />
                  </Fragment>
                )}
              />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
