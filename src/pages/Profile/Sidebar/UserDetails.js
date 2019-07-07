import React from 'react';
import PropTypes from 'prop-types';
import UserAvatar from '../../../components/UserAvatar/UserAvatar';

export default function UserDetails(props = {}) {
  const { username, age, city, country } = props;
  return (
    <div className="user-details-block">
      <UserAvatar />
      <div className="user-name-age">
        <span className="user-username">{ username }</span>

      </div>
      {city && country ?
        <div className="user-location">
          <span className="city">{ city }</span>
          <span className="seperator">, </span>
          <span className="country">{ country }</span>
        </div>
        :
        <p>No current residence was provided</p>
      }
     
    </div>
  );
}


UserDetails.propTypes = {
  username: PropTypes.string,
  age: PropTypes.number,
  city: PropTypes.string,
  country: PropTypes.string
};
