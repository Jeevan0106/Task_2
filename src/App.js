// App.js
import React from 'react';
import './App.css';
import UserProfileTask1 from './task1/profile';
import UserProfileTask2 from './task1/userprofile';
import Product from './task1/product';

function App() {
  return (
    <div>
      <h1 className='task1'>Task 1 - User Profile</h1>
      <UserProfileTask1 
        name="Jeevanprasath" 
        age={23} 
        location="Coimbatore" 
        isActive={true} 
      />
      <UserProfileTask1 
        name="Kumaran" 
        age={25} 
        isActive={false} 
      />

      <h1>Task 2 - User Profile with Age Check</h1>
      <UserProfileTask2 
        name="Kumari" 
        age={18} 
        email="Kumari@example.com" 
      />
      <UserProfileTask2 
        name="Umayal" 
        age={12} 
      />

      <h1>Task 3 - Product Component</h1>
      <Product 
        name="Smart-Watch" 
        price={1200} 
        inStock={true} 
      />
      <Product 
        name="Headset" 
        price={800} 
        inStock={false} 
      />
    </div>
  );
}

export default App;
