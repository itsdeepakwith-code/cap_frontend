import React from "react";
import { useSelector } from "react-redux";


import User from "./User";
import "./Users.css";

const UsersList = () => {
  const users = useSelector((state) => state.usersReducer);

  //   return (
  //     <div className="user-list-container">
  //       {users.map((user) => (
  //         <User user={user} key={user?._id} />
  //       ))}
  //     </div>
  //   );
  // };
  
  return (
    <div className="user-list-container">
      {Array.isArray(users) && users.length > 0 ? (
        users.map((user) => (
          <User user={user} key={user?._id} />
        ))
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}

export default UsersList;
