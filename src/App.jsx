import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Register from "./components/Register";

const App = () => {
  return<>
    <Header/>
    <Outlet/>
  </>
}
export default App;