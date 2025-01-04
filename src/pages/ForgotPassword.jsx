import { useLocation, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState(location.state?.email || "");
  const { forgotPassword } = useContext(AuthContext);

  const handleForgot = () => {
    if (!email) {
      toast.warn("Please enter your email address to reset the password.");
      return;
    }

    forgotPassword(email)
      .then(() => {
        toast.success("Password reset email sent successfully!");
        navigate("/login");
        window.open("https://mail.google.com", "_blank");
      })
      .catch((error) => {
        toast.error(`Failed to send reset email: ${error.message}`);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
       <Helmet>
        <title>Discount Pro | Forgot Password</title>
      </Helmet>
      <div className="card bg-white w-full max-w-lg rounded-lg p-10 shadow-lg transform transition-all hover:scale-105">
        <h2 className="text-center text-3xl font-semibold text-indigo-700 mb-6">Reset Your Password</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleForgot();
          }}
          className="card-body"
        >
          <div className="form-control mb-4">
            <label className="label text-lg font-medium text-gray-700">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="input input-bordered rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 p-3"
              required
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary rounded-lg w-full py-3 text-white text-lg">
              Reset Password
            </button>
          </div>
        </form>

       
      </div>
      <ToastContainer />
    </div>
  );
};

export default ForgotPassword;
