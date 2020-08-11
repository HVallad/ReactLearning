import React from "react";

//Functional Componenet
const Greet = props => {
  const {firstName, lastName} = props

  return (
    <div>
      <h1>
        Hello {firstName} {lastName}!!
      </h1>
    </div>
  );
};

export default Greet;
