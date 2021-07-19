import React, { useState } from 'react';
import User from './User';

const userList = [
  { id: 1, Name: 'Ruchi' },
  { id: 2, Name: 'Priya' },
  { id: 3, Name: 'Komal' }
];

const Users = () => {
  const [showNames, setShowNames] = useState(false);

  const showHandler = () => {
    // setShowNames(prevshowNames => !prevshowNames);
    setShowNames(showNames => !showNames);
  };

  return (
    <>
      <button onClick={showHandler} className="btn btn-sm btn-success">
        SHOW
      </button>
      {/* <User showName={showHandler} userList={userList} /> */}
      {userList.length === 0
        ? 'No Names'
        : userList.map(user => {
            return <User user={user} key={user.id} showStatus={showNames} />;
          })}
    </>
  );
};

export default Users;
