import { Outlet } from "react-router-dom";

import NavBar from "./components/Nav/NavBar";
import "./variables.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
};

export default App;
