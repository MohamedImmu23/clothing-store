import React, { useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import Homepage from "./Page/Homepage";
import ShopPage from "./Page/Shoppage";
import SignInAndSignUpPage from "./Page/sign-in-and-sign-up/signin-signup";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCurrentUser } from "./react/user/user.selectors";
import checkoutPage from "./Page/checkoutpage";
import { checkUserSession } from "./react/user/user.action";
 
const App = ({checkUserSession, currentUser}) => {
  
  useEffect(() => {
    checkUserSession();
  }, [checkUserSession]);

    return (
      <div className="App max-w-screen-lg mx-auto">
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/shoppage" component={ShopPage} />
            <Route exact path="/checkout" component={checkoutPage} />
            <Route
              exact
              path='/signin'
              render={() =>
                currentUser ? <Redirect to='/' /> : <SignInAndSignUpPage />
              }
            />
          </Switch>
        </Router>
      </div>
    );
  }

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
