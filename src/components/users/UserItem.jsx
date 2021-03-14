import React from 'react';
import './UserItem.scss';
import PropTypes from 'prop-types';

const UserItem = ({ user: { avatar_url, login, html_url } }) => {
  return (
    <div className='card'>
      <img src={avatar_url} alt='avatar' />
      <h3>{login}</h3>
      <a href={html_url}>
        <button>More</button>
      </a>
    </div>
  );
};
UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
