import React, { useState } from 'react';

const User = props => {
  return (
    <>
      {props.showStatus ? (
        <> </>
      ) : (
        <li>
          <ul> Id : {props.user.id} </ul>
          <ul> Name : {props.user.Name} </ul>
        </li>
      )}
    </>
  );
};

export default User;
