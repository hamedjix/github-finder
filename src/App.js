import { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar/Navbar';
import Users from './components/users/Users';
import axios from 'axios';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false,
  };
  async componentDidMount() {
    console.log(process.env.REACT_APP_GITHUB_CLIENT_ID);
    console.log(process.env.REACT_APP_GITHUB_CLIENT_SECRET);
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
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };
  render() {
    return (
      <div className='App'>
        <Navbar title='Github Finder' />
        <div className='container'>
          <Search
            onSearch={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={this.state.users.length > 0 ? true : false}
          />
          <Users users={this.state.users} />
        </div>
      </div>
    );
  }
}
export default App;
