import { useState } from "react";

const User = ({ name }) => {
  const [count] = useState(0);
  const [count1] = useState(1);
  return (
    <div className="user-card">
      <h1>count = {count}</h1>
      <h1>count1 = {count1}</h1>
      <h1>Name: {name}</h1>
      <h2>Location: Chennai</h2>
      <h3>Contact: muthukumaran050@gmail.com</h3>
    </div>
  );
};

export default User;
