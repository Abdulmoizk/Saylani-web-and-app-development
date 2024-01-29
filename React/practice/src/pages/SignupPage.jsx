import { Link } from "react-router-dom";
import SignupForm from "../components/antdesign/Signup";
import { auth, createUserWithEmailAndPassword } from "../firebase/firebase";


const Signup = () => {
  const registerUser = (values) => {
   console.log(values)
    createUserWithEmailAndPassword(auth, `${values.username}@example.com`, values.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)

      });
  };
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-6">
          <SignupForm registerUser={registerUser} />
          Already have an acount <Link to="/login">Login</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
