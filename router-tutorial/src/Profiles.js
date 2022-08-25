import React from "react";
import { Routes, Link, Route } from "react-router-dom";
import Profile from "./Profile";
import WithRouterSample from "./WithRouterSample";

const Profiles = () => {
  return (
    <div>
      <h3>사용자 목록:</h3>
      <ul>
        <li>
          <Link to="/profiles/yoojin">유진</Link>
        </li>
        <li>
          <Link to="/profiles/gildong">맥주</Link>
        </li>
      </ul>

      {/* <Routes>
        <Route
          path="/profiles"
          exact
          render={() => <div>사용자를 선택해 주세요.</div>}
        />
        <Route path="/profiles/:username" element={<Profile />} />
      </Routes> */}
      <Routes>
        <Route path="/*" element={<div>유저를 선택해주세요.</div>} />
        <Route path=":username" element={<Profile />} />
      </Routes>
      <WithRouterSample />
    </div>
  );
};

export default Profiles;
