import React, { useEffect, useState } from "react";
import "./style.css";

const UserListView = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setUsers(storedUsers);
  }, []);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className="user-list-container">
      <h2>User List</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>
      <div className="user-cards">
        {filteredUsers.map((user) => (
          <div key={user.empId} className="user-card">
            <p>Emp ID: {user.empId}</p>
            <p>Name: {user.name}</p>
            <p>DOB: {user.dob}</p>
            <p>Role: {user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserListView;
