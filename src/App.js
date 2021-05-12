import { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// Pages
import HomePage from "./pages/home";
import PageNotFound from "./pages/404";
import LogInPage from "./pages/login";
import RegisterPage from "./pages/register";
import PasswordResetPage from "./pages/passwordReset";
import Nav from "./components/Nav";
import MovieDetails from "./pages/movieDetails"
import MovieSearch from './pages/movieSearch'

const App = () => {
  // const adminDetails = {
  //   username: "admin",
  //   password: "admin123",
  // };

  const [User] = useState({
    username: "admin",
    password: "admin123",
  });

  const [loggedIn, setloggedIn] = useState(false);


  const signIn = () => {
    setloggedIn(true);
  };

  const signOut = () => {
    setloggedIn(false);
  };

  return (
    <Router>
      <Nav loggedIn={loggedIn} signOut={signOut}/>
      <Switch>
        {/* {(user.username != "") ? <Redirect to="/login"/> : <Route exact path="/" component={HomePage} />} */}

        <Route
          exact
          path="/"
          // component={LogInPage}
          render={(props) => (
            <LogInPage
              user={User}
              loggedIn={loggedIn}
              signIn={signIn}
              signOut={signOut}
            />
          )}
        />

        <Route
          exact
          path="/register"
          render={(props) => (
            <RegisterPage loggedIn={loggedIn} signOut={signOut} />
          )}
        />
        <Route
          exact
          path="/pwreset"
          render={(props) => (
            <PasswordResetPage loggedIn={loggedIn} signOut={signOut} />
          )}
        />

        <Route path="/moviedetails/:id" render={(props) => ( <MovieDetails key={props.match.params.id} {...props}/>)} />

        <Route path="/search/:search" render={(props) => ( <MovieSearch key={props.match.params.search} {...props}/>)} />
         

        <Route
          exact
          path="/404"
          render={(props) => <PageNotFound loggedIn={loggedIn} />}
        />
        <Route
          exact
          path="/home"
          render={(props) => <HomePage loggedIn={loggedIn} signOut={signOut} />}
        />
        <Redirect to="/404" />
      </Switch>
    </Router>
  );
};

export default App;
//helo
// hello
