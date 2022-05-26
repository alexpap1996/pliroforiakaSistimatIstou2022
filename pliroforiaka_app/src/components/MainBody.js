import React from "react";
import HomePage from "./views/HomePage";
import About from "./views/About";
import ErrorPage from "./views/ErrorPage";
import Articles from "./views/Articles";
import CommunicationPage from "./views/CommunicationPage";
import Login from "./views/Login";
import Article from "./views/Article";
import Signup from "./views/Signup";
import Profile from "./views/Profile";
import EditArticle from "./views/EditArticle";
import CreateArticle from "./views/CreateArticle";

const pageMap = {
<<<<<<< HEAD
  'Home': HomePage,
  'About': About,
  'ErrorPage': ErrorPage,
  'Articles': Articles,
  'CommunicationPage': CommunicationPage,
  'Login': Login,
  'Article': Article,
  'Signup': Signup,
  'Profile': Profile,
  'EditArticle' : EditArticle,
  'CreateArticle' : CreateArticle,
} 
=======
  Home: HomePage,
  About: About,
  ErrorPage: ErrorPage,
  Articles: Articles,
  CommunicationPage: CommunicationPage,
  Login: Login,
  Article: Article,
  Signup: Signup,
  Profile: Profile,
  EditArticle: EditArticle,
  CreateArticle: CreateArticle,
};
>>>>>>> 48146e7d5932a4fb3cb34ef6c36fe83a0751997d

function MainBody(state) {
  const {
    pageName,
    changePageNameFn,
    validateUserFn,
    searchTerm,
    pageData,
    setLoginErrorFn,
    setSignupErrorFn,
    loginError,
    signupError,
    setCurrentUserFn,
    isUserLoggedIn,
    loggedInUser,
    posts,
    getArticlesFn,
  } = state;
  const PageToReturn = pageMap[pageName];

  return (
    <>
      <PageToReturn
        changePageNameFn={changePageNameFn}
        validateUserFn={validateUserFn}
        setLoginError={setLoginErrorFn}
        setSignupError={setSignupErrorFn}
        setCurrentUser={setCurrentUserFn}
        loginError={loginError}
        signupError={signupError}
        posts={posts}
        searchTerm={searchTerm}
        pageData={pageData}
        isUserLoggedIn={isUserLoggedIn}
        loggedInUser={loggedInUser}
        getArticlesFn={getArticlesFn}
      />
    </>
  );
}

export default MainBody;
