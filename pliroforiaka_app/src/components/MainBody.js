import React, { useState, useEffect } from "react";
import HomePage from './views/HomePage'
import About from "./views/About"
import ErrorPage from './views/ErrorPage'
import Articles from "./views/Articles";
import CommunicationPage from "./views/CommunicationPage";

const pageMap = {
  'Home': HomePage,
  'About': About,
  'ErrorPage': ErrorPage,
  'Articles': Articles,
  'CommunicationPage': CommunicationPage,
} 

function MainBody(state) {
  const { pageName, changePageNameFn } = state
  const PageToReturn = pageMap[pageName]
  return (
    <>
      <PageToReturn 
        changePageNameFn={changePageNameFn}
      />
    </>
  );
}

function search () {

}

export default MainBody;
