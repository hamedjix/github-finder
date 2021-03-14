import React from 'react';
import './Users.scss';
import UserItem from './UserItem';
import Spinner from '../Spinner/Spinner';
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div className='grid'>
        {users.map((user) => {
          return <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
};

export default Users;
