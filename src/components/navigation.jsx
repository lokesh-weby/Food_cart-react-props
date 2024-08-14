import React from "react";
import "../css/navigation.css";
import { Link } from "react-router-dom";

const navigation = ({length}) => {
  return (
    <>
      <nav>
        <Link to={"/"}><h2>WEBY'S KITCHEN</h2></Link>
        <Link to={"/cart"}><i class="bi bi-cart"/><span className="count"><p>{length}</p></span></Link>
        
        <></>
      </nav>
    </>
  );
};

export default navigation;
