import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaGoogle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet-async";

const Login = () => {
  const { signUser, setUser, signWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const emailRef = useRef();
  const [error, setError] = useState({});

  const handleGoogle = () => {
    signWithGoogle()
      .then((result) => {
        setUser(result.user);
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        toast.error("Failed to log in with Google. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signUser(email, password)
      .then((result) => {
        setUser(result.user);
        e.target.reset();
        navigate(location?.state ? location.state : "/");
      })
      .catch((err) => {
        setError((prev) => ({ ...prev, login: err.code }));
        toast.error(`Login failed: ${err.code}`);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center  py-8">
       <Helmet>
        <title>Discount Pro | Login</title>
      </Helmet>
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800">Login to Your Account</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              ref={emailRef}
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
            <label className="label">
              <Link
                to="/forgot-password"
                state={{ email: emailRef.current?.value }}
                className="label-text-alt link link-hover text-sm text-blue-600"
              >
                Forgot password?
              </Link>
            </label>
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary w-full py-2 text-lg font-semibold rounded-lg">
              Login
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm font-semibold">
            Don't have an account?{" "}
            <Link className="text-red-500" to="/register">
              Register
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full py-2 text-lg flex items-center justify-center gap-2 bg-white text-gray-800 hover:text-black rounded-lg hover:bg-gray-100 transition-all"
          >
            <FaGoogle className="text-xl " />
            Login with Google
          </button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
