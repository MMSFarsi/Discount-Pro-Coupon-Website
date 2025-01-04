import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen mb-8 ">
       <Helmet>
        <title>Discount Pro | Profile</title>
      </Helmet>
      <div className=" h-60 flex flex-col justify-center items-center  text-center">
      <h1 className="text-4xl font-extrabold text-center text-indigo-600">
  Welcome to your profile, <span className="text-blue-500">{user?.displayName}</span>! 🎉
</h1>
       
      </div>

   
      <div className="flex justify-center mt-2 px-6">
        <div className="w-full sm:w-96 md:w-1/2 bg-white rounded-xl shadow-2xl p-6 transform hover:scale-105 transition-transform duration-300 ease-in-out">
          <div className="flex justify-center pb-4">
            <img
              src={user?.photoURL}
              alt="User Photo"
              className="rounded-full w-36 h-36 object-cover border-4 border-gray-200 shadow-xl"
            />
          </div>

          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {user?.displayName || "Name not available"}
            </h2>
            <p className="text-gray-600">{user?.email || "Email not available"}</p>

            <div className="space-y-2">
              <Link
                to="/update-profile"
                className="btn bg-purple-600 text-white hover:bg-purple-700 w-full sm:w-auto px-6 py-2 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300 ease-in-out"
              >
                Update Profile
              </Link>
            </div>

         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
