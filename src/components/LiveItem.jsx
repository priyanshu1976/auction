import axios from "axios";
import { useEffect, useState } from "react";

function LiveItem() {
  const [liveitem, setliveitem] = useState();
  useEffect(() => {
    axios.get("http://localhost:5000/active").then((res) => {
      console.log("this is the active item");
      console.log(res);
      setliveitem(res.data[0].itemName);
    });
  });
  return (
    <div className="relative group flex justify-between items-center p-6 px-16 border border-pink-800 rounded-lg shadow-md bg-gradient-to-b from-slate-900 to-red-700 text-white transform transition-transform duration-200 hover:shadow-lg hover:scale-101">
      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-lg group-hover:opacity-20"></div>

      {/* Image Section */}
      <div className="relative z-10 w-28 h-28 flex-shrink-0 rounded-md overflow-hidden border-2 border-white shadow-sm transform transition-transform duration-200 group-hover:scale-102">
        <img src="" alt="" className="w-full h-full object-cover" />
      </div>

      {/* Details Section */}
      <div className="relative z-10 flex flex-col gap-2">
        <div className="text-2xl font-bold uppercase tracking-wide">
          {liveitem}
        </div>
        <div className="text-2xl font-medium text-green-500">Value</div>
      </div>
    </div>
  );
}

export default LiveItem;
