import React, { useState } from "react";
import Lottery from './lottery/Lottery'
import Users from './usersTable/Users'

import "./App.css";

export default function App() {
  const [activeComponent, setActiveComponent] = useState("lottery");

  return (
    <div>
      <div className="top-buttons">
        <button onClick={() => setActiveComponent("lottery")}>Lottery</button>
        <button onClick={() => setActiveComponent("table")}>User Table</button>
      </div>

      <div className="component-container">
        {activeComponent === "lottery" ? <Lottery/> : <Users />}
      </div>
    </div>
  );
}
