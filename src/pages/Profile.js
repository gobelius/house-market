import React, { useEffect, useState } from "react";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const auth = getAuth();
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(auth.currentUser);
  }, []);
  return user ? <h1>{user.displayName}</h1> : "Not logged in";
};

export default Profile;
