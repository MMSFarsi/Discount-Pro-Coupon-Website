import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { registerUser, setUser, updateUserProfile, signWithGoogle } = useContext(AuthContext);
  const [error, setError] = useState({});
  const [showPass, setShowPass] = useState(false);
  const navigate = useNavigate();

  const handleGoogle = () => {
    signWithGoogle()
      .then((result) => {
        setUser(result.user);
        toast.success("Logged in with Google successfully!");
        navigate("/");
      })
      .catch((err) => {
        toast.error("Failed to log in with Google. Please try again.");
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    if (password.length < 6) {
      toast.error("Password must be at least 6 characters.");
      return;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]+$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must include at least one uppercase letter, one lowercase letter, and one digit."
      );
      return;
    }

    registerUser(email, password)
      .then((result) => {
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser(result.user);
            navigate("/");
          })
          .catch((error) => {
           
            toast.error("Failed to update profile.");
          });
      })
      .catch((err) => {
        setError((prev) => ({ ...prev, register: err.code }));
        toast.error(`Registration failed: ${err.code}`);
      });
  };

  return (
    <div className="min-h-screen flex justify-center items-center  py-8">
       <Helmet>
        <title>Discount Pro | Register</title>
      </Helmet>
      <div className="w-full max-w-md bg-white rounded-xl shadow-xl p-8 space-y-6">
        <h2 className="text-center text-3xl font-semibold text-gray-800">Register Here</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Your Profile Picture URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
              required
            />
          </div>

          <div className="form-control relative">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              type={showPass ? "text" : "password"}
              name="password"
              placeholder="Choose a Password"
              className="input input-bordered w-full"
              required
            />
            <button
              type="button"
              onClick={() => setShowPass(!showPass)}
              className="btn btn-xs absolute right-4 top-12"
            >
              {showPass ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <div className="form-control mt-6">
            <button
              type="submit"
              className="btn btn-primary w-full py-2 text-lg font-semibold rounded-lg"
            >
              Register
            </button>
          </div>
        </form>

        <div className="text-center">
          <p className="text-sm font-semibold">
            Already have an account?{" "}
            <Link className="text-green-500" to="/login">
              Login
            </Link>
          </p>
        </div>

        <div className="flex items-center justify-center space-x-4">
          <button
            onClick={handleGoogle}
            className="btn btn-outline w-full py-2 text-lg flex items-center justify-center gap-2 bg-white text-gray-800 hover:text-black rounded-lg hover:bg-gray-100 transition-all"
          >
            <FaGoogle className="text-xl" />
            Register with Google
          </button>
        </div>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Register;
