import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

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
