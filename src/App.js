import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import Login from "./components/Login";
import Checkout from "./components/Checkout";
import { useStateValue } from "./StateProvider";
import { auth } from "./firebase";
import { useEffect } from "react";

function App() {
  const [{ user }, dispatch] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(authUser => {
      if(authUser) {
        //The user is logged in
        dispatch({
          type: "SET_USER",
          user: authUser
        })
      } else {
        //The user is logged out
        dispatch({
          type: "SET_USER",
          user: null
        })
      }
    })
    return () => {
      // Any clean up operation goes in here
      unsubscribe();
    }
  }, [])

  return (
    <>
     <Switch>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/checkout">
            <Header/>
            <Checkout/>
          </Route>
          <Route path="/">
            <Header/>
            <Home/>
          </Route>
        </Switch>
    </>
  );
}

export default App;
