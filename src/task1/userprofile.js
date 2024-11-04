// UserProfileTask2.js
import React from 'react';

const UserProfile = ({ name, age, email }) => {
  return (
    <div style={styles.container}>
      <h2>{name}, {age}</h2>
      <p>{age >= 18 ? 'Adult' : 'Minor'}</p>
      {email && <p>Email: {email}</p>}
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
