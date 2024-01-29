import React, { useState } from "react";
import { Outlet, useParams, useSearchParams } from "react-router-dom";

function Profile() {
  const { username, name } = useParams();
  let [searchParams, setSearchParams] = useSearchParams();
  const [updatedName, setUpdatedName] = useState(name);

  const nameUpdate = async () => {
    searchParams.set("name", "hussain");
    setSearchParams(searchParams);
    const newName = searchParams.get("name");
    setUpdatedName(newName);
  };

  return (
    <div>
      <h1>Profile ({updatedName})</h1>
      <button onClick={nameUpdate}>Update URL link</button>
      <Outlet />

    </div>
  );
}

export default Profile;
