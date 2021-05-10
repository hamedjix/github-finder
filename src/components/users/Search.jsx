import React, { Component } from 'react';
import './Search.scss';
import PropTypes from 'prop-types';

class Search extends Component {
  state = {
    text: '',
  };
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === '') {
      this.props.setAlert('Please Enter Something');
    } else {
      this.props.onSearch(this.state.text);
      this.setState({ text: '' });
    }
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
            autoComplete='off'
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
