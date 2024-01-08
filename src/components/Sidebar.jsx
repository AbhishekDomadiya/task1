// Importing necessary React hooks and components
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

//Defining the Sidebar component
const Sidebar = () => {
// Initializing variables using the state hook
  const navigate = useNavigate();    // React Router for navigation
  const [open, setOpen] = useState(false);    // State for managing the visibility of the "Add Role" 
  const [userRole, setUserRole] = useState({
    username: "",
    password: "",
    role: {
      page1: false,
      page2: false,
      page3: false,
      page4: false,
    },
  });    // State for managing user role data
  const [activeUser, setActiveUser] = useState("");// State for storing the active user

  // Function to handle changes in form inputs (username, password, and role checkboxes)
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
    // Updating the state for role checkboxes
      setUserRole((prevState) => ({
        ...prevState,
        role: {
          ...prevState.role,
          [name]: checked,
        },
      }));
    } else {
    //Updating the state for text inputs (username and password)
      setUserRole((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  }
  //Function to handle adding a new role
  function handleRole(event) {
    event.preventDefault();
    localStorage.setItem(`roles${userRole.username}`, JSON.stringify(userRole)); // Storing the user role data in local storage
    setOpen(false);
  }
  // Function to handle user logout
  function handleLogout() {
    localStorage.removeItem("activeUser");
    navigate("/login");
  }
  //useEffect to set the active user from localStorage
  useEffect(() => {
    setActiveUser(
      JSON.parse(localStorage.getItem(localStorage.getItem("activeUser")))
    );
  }, []);
  //jsx rendering
  return (
    <div className="sidebar">
      <ul>
        <li>
          <a onClick={() => navigate("/")}>Dashboard</a>
        </li>
        <li>
          <a
            onClick={
              activeUser?.role?.page1
                ? () => navigate("/page-1")
                : () => alert("You don't have access to view this page")
            }
          >
            Page 1
          </a>
        </li>
        <li>
          <a
            onClick={
              activeUser?.role?.page2
                ? () => navigate("/page-2")
                : () => alert("You don't have access to view this page")
            }
          >
            Page 2
          </a>
        </li>
        <li>
          <a
            onClick={
              activeUser?.role?.page3
                ? () => navigate("/page-3")
                : () => alert("You don't have access to view this page")
            }
          >
            Page 3
          </a>
        </li>
        <li>
          <a
            onClick={
              activeUser?.role?.page4
                ? () => navigate("/page-4")
                : () => alert("You don't have access to view this page")
            }
          >
            Page 4
          </a>
        </li>

        {activeUser?.username === "admin" && (
          <li>
            <button onClick={() => setOpen(true)}>Add Role</button>
          </li>
        )}

        <li>
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>

      {open && (
        <div id="myModal" className="modal">
          <div className="modal-content">
            <span
              className="close"
              style={{ cursor: "pointer" }}
              onClick={() => setOpen(false)}
            >
              &times;
            </span>
            <h2>Add Role</h2>
            <form id="loginForm">
              <div className="input-group">
                <label for="username">Username:</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  required
                  value={userRole.username}
                  onChange={handleChange}
                />
              </div>
              <div className="input-group">
                <label for="password">Password:</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  required
                  value={userRole.password}
                  onChange={handleChange}
                />
              </div>
              <div className="checkbox-group">
                <label>
                  <input
                    type="checkbox"
                    name="page1"
                    value={userRole.role.page1}
                    onChange={handleChange}
                  />
                  Page 1
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="page2"
                    value={userRole.role.page2}
                    onChange={handleChange}
                  />
                  Page 2
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="page3"
                    value={userRole.role.page3}
                    onChange={handleChange}
                  />
                  Page 3
                </label>
                <label>
                  <input
                    type="checkbox"
                    name="page4"
                    value={userRole.role.page4}
                    onChange={handleChange}
                  />
                  Page 4
                </label>
              </div>
              <button onClick={handleRole}>Add Role</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
