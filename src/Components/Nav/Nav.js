import React from "react";
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className="Nav">
      <header>
        <h1>Welcome</h1>
      </header>
      <nav>
        <Link to="/mobx">
            MobX
        </Link>
      </nav>
    </div>
  );
}

export default Nav;
