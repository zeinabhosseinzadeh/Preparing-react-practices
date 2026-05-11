import React, { useContext } from "react";
import authContext from "../Utils/AuthContext";

export default function user() {
  // const id = useContext(authContext)
  const [token,handleToken] = useContext(authContext)


  return (
  <div>user id : {id}</div>
    )
    
}
