import React, { Component } from 'react';
import './Search.scss';
import Proptypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };
  static propTypes = {
    onSearch: Proptypes.func.isRequired,
    clearUsers: Proptypes.func.isRequired,
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
      <div>
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

        {this.props.showClear && (
          <button
            className='clear'
            type='button'
            onClick={this.props.clearUsers}
          >
            Clear List
          </button>
        )}
      </div>
    );
  }
}

export default Search;
