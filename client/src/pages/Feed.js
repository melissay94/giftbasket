import React from "react";
import { Redirect } from "react-router-dom";

function Feed(props) {
  
  if (!props.isLoggedIn) {
    return <Redirect to="/" />
  }

  return(
    <div>Feed</div>
  );
}

export default Feed;
