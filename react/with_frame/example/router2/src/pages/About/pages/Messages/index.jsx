import React from 'react'
import {useLocation} from "react-router-dom"

export default function Messages() {
  const stateParams = useLocation();
  console.log(stateParams.state);
  return (
    <h3>msg</h3>
  )
}