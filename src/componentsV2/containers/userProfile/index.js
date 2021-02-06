import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import './index.scss';

import Button from '../../UI/button';
import { deleteUserData } from '../../../actions';

const UserProfile = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const logOff = () => {
    dispatch(deleteUserData());
    localStorage.removeItem('user');
    history.push('/');
  };

  const username = useSelector(state => state.userInfo.username);

  return (
    <div className="user-profile">
      <div className="user-info-container">
        <p>{username}'s Profile...</p>
      </div>
    </div>
  );
};
export default UserProfile;
