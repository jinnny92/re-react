import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Profile from "./Profile";
import Profiles from "./Profiles";

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">소개</Link>
        </li>
        <li>
          <Link to="/profile/yoojin"> yoojin 프로필</Link>
        </li>
        <li>
          <Link to="/profile/beer"> yoojin의 최애 음식 프로필</Link>
        </li>
        <li>
          <Link to="/profiles">프로필</Link>
        </li>
      </ul>
      <hr />

      <Routes>
        <Route path="/" element={<Home />} exact={true} />
        <Route path="/about" element={<About />} />
        <Route path="/info" element={<About />} />
        {/* <Route path={['/about', '/info']} element={<About />} /> */}
        <Route path="/profile/:username" element={<Profile />} />
        <Route path="/profiles/*" element={<Profiles />} />
      </Routes>
    </div>
  );
};

export default App;
