import React, { Component } from 'react';
import './Search.scss';

class Search extends Component {
  state = {
    text: '',
  };
  render() {
    return (
      <div>
        <form>
          <input
            className='Search'
            type='text'
            name='text'
            placeholder='Search Users'
            value={this.state.text}
          />
        </form>
      </div>
    );
  }
}

export default Search;
