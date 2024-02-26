import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./variables.css";

const App = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <div>Some Footer</div>
    </div>
  );
};

export default App;
