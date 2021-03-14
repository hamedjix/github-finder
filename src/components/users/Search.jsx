import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  state = {
    text: '',
  };

  onSubmit = (e) => {
    e.preventDefault();
    this.props.onSearch(this.state.text);
    this.setState({ text: '' });
  };
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  render() {
    return (
      <form onSubmit={this.onSubmit} className='Search'>
        <input
          type='text'
          name='text'
          placeholder='Search Users'
          value={this.state.text}
          onChange={this.onChange}
        />
        <button type='submit'>Search</button>
      </form>
    );
  }
}

export default Search;
