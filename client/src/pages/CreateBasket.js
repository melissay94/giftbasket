import React from "react";
import { Redirect } from "react-router-dom";

function CreateBaskets(props) {
  
  if (!props.isLoggedIn) {
    return <Redirect to="/" />
  }

  return(
    <div>CreateBaskets</div>
  );
}

export default CreateBaskets;
