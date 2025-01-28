import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import homebg from "../assets/homebg2.png";

function Home() {
  return (
    <div
      className="relative w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-black bg-opacity-100"
      style={{
        backgroundImage: `url(${homebg})`,
        backgroundSize: 'cover',  // Ensures background image covers the screen
        
        backgroundRepeat: 'no-repeat',
        opacity: 1, // Fully opaque background image
      }}
    >
      <div className="text-center text-white"
      style={{margin:"auto"}}>
        {/* Buttons */}
        <div className="space-x-16" style={{marginTop:"32rem"}}>
          <Link to="/signup">
            <button className="px-6 py-2 text-white bg-green-500 rounded-full hover:bg-green-600 transition duration-300 shadow-md transform hover:scale-125">
              Signup
            </button>
          </Link>
          <Link to="/login">
            <button className="px-6 py-2 text-white bg-blue-500 rounded-full hover:bg-blue-600 transition duration-300 shadow-md transform hover:scale-125">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
