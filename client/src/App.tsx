import Navigation from "./layout/Navigation";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Navigation />
      <>
        <Outlet />
      </>
    </>
  );
}

export default App;
