import React, { useEffect, useState } from "react";
import LiveItem from "./LiveItem";
import UpcomingItem from "./UpcomingItem";
import JsonArray from "./Data";
import bg from "../assets/Untitled.png";
import { useParams } from "react-router-dom";
import axios from "axios";

function Auction() {
  function doRenderItem(obj, index) {
    return <UpcomingItem key={index} {...obj} />;
  }
  const [inventory, setinventory] = useState();
  const [balance, setbalance] = useState();
  const [avaliable, setavaliable] = useState();

  const params = useParams();
  const teamname = params.teamName;

  useEffect(() => {
    axios
      .get(`http://localhost:5000/team/inventory/${teamname}`)
      .then((res) => {
        console.log(res);
        setinventory(res.data.inventory);
        setbalance(res.data.balance);
      })
      .catch((err) => {
        console.log(err.message);
      });

    axios
      .get("http://localhost:5000/inventory")
      .then((data) => {
        console.log(data);
        setavaliable(data.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <>
      <div className="flex flex-col h-screen bg-[#002A50] text-white font-sans">
        {" "}
        {/* Dark Blue Background */}
        {/* Header */}
        <header className="flex justify-between items-center bg-gray-800 text-white p-4 shadow-lg">
          <span className="text-3xl font-extrabold font-serif tracking-wide">
            🏆 {teamname}
          </span>
          <span className="text-2xl font-bold font-serif">
            💰 Balance: {balance}
          </span>
          <span className="text-2xl font-bold font-serif tracking-wider">
            📡 Live Auction
          </span>
        </header>
        {/* Middle Section */}
        <div className="flex flex-1 overflow-hidden">
          {/* Cart (Middle Left) - Player List */}
          <div className="w-1/3 border-r border-black p-4 overflow-y-auto no-scrollbar bg-[#111] shadow-inner">
            {" "}
            {/* Darker Background */}
            <h2 className="text-lg font-semibold mb-4 text-[#e0358d] font-serif tracking-tight">
              🛒 Cart
            </h2>{" "}
            {/* Yellow Text */}
            {inventory ? (
              <ul className="space-y-2">
                {inventory.map((obj, index) => doRenderItem(obj, index))}
              </ul>
            ) : null}
          </div>

          {/* Current Bidding Item - Game Area */}
          <div
            className="w-3/5 border-r border-black p-4"
            style={{
              backgroundImage: `url(${bg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              opacity: 0.9, // Only the background image is affected
            }}
          >
            <h2 className="text-4xl font-semibold mb-4 text-center font-serif">
              Current Item on Bid
            </h2>
            <ul>
              <LiveItem /> {/* This would display the current game/challenge */}
            </ul>
          </div>

          {/* Items for Bidding (Middle Right) - Upcoming Games */}
          <div className="w-1/3 p-4 overflow-y-auto no-scrollbar bg-[#111] shadow-inner">
            <h2 className="text-lg font-semibold mb-4 text-[#e0358d] font-serif tracking-wide">
              ⏭️ Upcoming Items for Bid
            </h2>
            {avaliable ? (
              <ul className="space-y-2">
                {avaliable.map((obj, index) => doRenderItem(obj, index))}
              </ul>
            ) : null}
          </div>
        </div>
        {/* <footer className='bg-black text-white p-4 text-center'>Game Master</footer> */}
      </div>
    </>
  );
}

export default Auction;
