// UserProfileTask1.js
import React from 'react';

const UserProfile = ({ name, age, location, isActive }) => {
  return (
    <div style={styles.container}>
      <h2>{name}, {age}</h2>
      <p>{isActive ? 'Active User' : 'Inactive User'}</p>
      {location && <p>Location: {location}</p>}
    </div>
  );
};

const styles = {
  container: {
    border: '1px solid #ccc',
    padding: '16px',
    borderRadius: '8px',
    maxWidth: '300px',
    margin: '10px auto',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
  },
};

export default UserProfile;
