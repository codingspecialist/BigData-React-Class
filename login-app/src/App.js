import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import { Route } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import UserPage from "./pages/UserPage";
import { Button } from "antd";

function App() {
  return (
    <div>
      <Header />
      <Route path="/" exact={true} component={HomePage} />
      <Route path="/user" exact={true} component={UserPage} />
    </div>
  );
}

export default App;
