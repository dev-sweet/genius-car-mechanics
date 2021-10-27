import React,{useState} from "react";
import useAuth from "../../../hooks/useAuth";
const Login = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {signInWithGoogle,signInWithEmail} = useAuth();

  const handleEmailChange = e =>{
    setEmail(e.target.value);
  }
  const handlePassChange= e =>{
    setPassword(e.target.value);
  }
  const handleSigning = e =>{
    e.preventDefault();
    signInWithEmail(email,password);
  }
  return (
    <div className="pt-5 mt-5">
      <h1 className="mt-5">Please Login</h1>
      <form className="w-50 ms-auto me-auto" onSubmit={handleSigning}>
        <input type="email" placeholder="Your Email" onBlur={handleEmailChange} className="form-control" />
        <br />
        <input type="password" placeholder="Password" onBlur={handlePassChange} className="form-control" />
        <br />
        <input className="btn btn-secondary" type="submit" value="Submit" />
      </form>
      <br />
      <h1 className="my-3 text-center">-------OR-------</h1>
      <button className="btn btn-warning" onClick={signInWithGoogle}>Google Signin</button>
    </div>
  );
};

export default Login;
