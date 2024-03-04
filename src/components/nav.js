import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/"> 홈 </Link>
      <Link to="/makeRoom"> 방만들기 </Link>
      <Link to="/intoRoom"> 입장하기 </Link>
      <Link to="/Test"> 테스트 </Link>
    </div>
  );
}

export default Nav;
