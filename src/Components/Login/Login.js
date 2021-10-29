import React from "react";
import useAuth from "../../Hooks/useAuth";
import { useHistory, useLocation } from "react-router";
const Login = () => {
  const { signInWithGoogle, setUser } = useAuth();

  const history = useHistory();
  const location = useLocation();

  const url = location.state?.from || "/home";
  //handle google
  const handleGoogleLogIn = () => {
    signInWithGoogle().then((res) => {
      setUser(res.user);
      history.push(url);
    });
    // console.log("click");
  };
  return (
    <div className="text-center">
      <h1>Please Login with Google</h1>
      <button
        onClick={handleGoogleLogIn}
        type="submit"
        className="btn btn-warning my-5"
      >
        Google SignIn
      </button>
    </div>
  );
};

export default Login;
