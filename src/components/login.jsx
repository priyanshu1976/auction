import axios from "axios";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import bg from "../assets/bg.jpg";

function Login() {
  const [formdata, setformdata] = useState({ teamName: "", password: "" });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("this is hit");
    console.log(formdata);
    try {
      const response = await axios.post(
        "http://localhost:5000/team/signin",
        formdata
      );
      console.log(response);
      if (response.data.message === "Authentication successful") {
        navigate(`/auction/${formdata.teamName}`);
      } else {
        console.error("Authentication failed");
      }
    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
    }
  };

  return (
    <div className="relative flex font-poppins items-center justify-center min-w-screen min-h-screen bg-black bg-opacity-70">
      {/* Background Image Layer */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          opacity: 0.5, // Only the background image is affected
          zIndex: -1, // Keeps it behind the content
        }}
      ></div>

      {/* Content Layer */}
      <div className="grid gap-8 z-10">
        <div
          id="back-div"
          className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-[26px] m-4"
        >
          <div className="border-[20px] border-transparent rounded-[20px] dark:bg-gray-900 bg-white shadow-lg xl:p-10 2xl:p-10 lg:p-10 md:p-10 sm:p-2 m-2">
            <h1 className="pt-8 pb-6 font-bold text-5xl dark:text-gray-400 text-center">
              LogIn
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="team-name"
                  className="mb-2 dark:text-gray-400 text-lg"
                >
                  Team Name:
                </label>
                <input
                  id="team-name"
                  name="teamName"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="text"
                  placeholder="Enter your team name"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 dark:text-gray-400 text-lg"
                >
                  Password:
                </label>
                <input
                  id="password"
                  name="password"
                  className="border dark:bg-indigo-700 dark:text-gray-300 dark:border-gray-700 p-3 mb-2 shadow-md placeholder:text-base border-gray-300 rounded-lg w-full focus:scale-105 ease-in-out duration-300"
                  type="password"
                  placeholder="Enter your password"
                  required
                  onChange={handleInputChange}
                />
              </div>
              <button
                className="bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg mt-6 p-2 text-white rounded-lg w-full hover:scale-105 hover:from-purple-500 hover:to-blue-500 transition duration-300 ease-in-out"
                type="submit"
              >
                Log In
              </button>
            </form>
            <div className="flex flex-col mt-4 items-center justify-center text-sm">
              <h3>
                <span className="dark:text-gray-300">
                  Don&apos;t have an account?
                </span>
                <Link
                  to="/signup"
                  className="group text-blue-400 transition-all duration-100 ease-in-out ml-1"
                >
                  <span className="bg-left-bottom bg-gradient-to-r from-blue-400 to-blue-400 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">
                    Sign Up
                  </span>
                </Link>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
