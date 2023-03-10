import { BrowserRouter, Route, Routes as RT } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Research from "./Pages/Research/Research";
import Team from "./Pages/Team/Team";
import User from "./Pages/User/User";

const Routes = () => {
  return (
    <BrowserRouter>
      <RT>
        <Route element={<Home />} path="/" />
        <Route element={<User />} path="/user" />
        <Route element={<Research />} path="/Research" />
        <Route element={<Team />} path="/Team" />
      </RT>
    </BrowserRouter>
  );
};

export default Routes;
