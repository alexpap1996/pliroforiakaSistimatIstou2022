import React, { useState, useEffect } from "react";
import HomePage from './views/HomePage'
import About from "./views/About"
import ErrorPage from './views/ErrorPage'
import Articles from "./views/Articles";
import CommunicationPage from "./views/CommunicationPage";
import Login from "./views/Login";

const pageMap = {
  'Home': HomePage,
  'About': About,
  'ErrorPage': ErrorPage,
  'Articles': Articles,
  'CommunicationPage': CommunicationPage,
  'Login': Login
} 

function MainBody(state) {
  const { pageName, changePageNameFn, validateUserFn } = state
  const PageToReturn = pageMap[pageName]

  return (
    <>
      <PageToReturn 
        changePageNameFn={changePageNameFn}
        validateUserFn={validateUserFn}
      />
    </>
  );
}

export default MainBody;
