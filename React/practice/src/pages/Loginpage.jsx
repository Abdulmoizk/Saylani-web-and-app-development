import { Link } from "react-router-dom";
import LoginForm from "../components/antdesign/Login";
import { auth, signInWithEmailAndPassword } from "../firebase/firebase";

const Login = () => {
  const loginuser = (values) => {
    signInWithEmailAndPassword(
      auth,
      `${values.username}@example.com`,
      values.password
    )
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="mt-5 container">
      <div className="row justify-content-center">
        <div className="col-6">
          <LoginForm loginuser={loginuser} />
          Dont have an acount <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
