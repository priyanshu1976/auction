import { useState } from "react";
import axios from "axios";

function Admin() {
  const [formData, setFormData] = useState({
    itemName: "",
    teamName: "",
    itemQuantity: 0,
    amount: 0,
  });

  const [active, setActive] = useState({
    itemName: "",
    itemQuantity: 0,
  });

  const teaminventory = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/change",
        formData
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const funa = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/admin/active",
        active
      );
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <form onSubmit={teaminventory}>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={formData.itemName}
            onChange={(e) =>
              setFormData({ ...formData, itemName: e.target.value })
            }
            placeholder="Item Name"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
          />
        </div>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={formData.teamName}
            onChange={(e) =>
              setFormData({ ...formData, teamName: e.target.value })
            }
            placeholder="Team Name"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
          />
        </div>
        <div className="mb-6 flex justify-center">
          <input
            type="number"
            value={formData.itemQuantity}
            onChange={(e) =>
              setFormData({ ...formData, itemQuantity: e.target.value })
            }
            placeholder="Quantity"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
          />
        </div>
        <div className="mb-6 flex justify-center">
          <input
            type="number"
            value={formData.amount}
            onChange={(e) =>
              setFormData({ ...formData, amount: e.target.value })
            }
            placeholder="Amount"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
          />
        </div>
        <div className="mb-6 flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
          >
            Submit
          </button>
        </div>
      </form>

      <br />
      <br />

      <form onSubmit={funa}>
        <div className="mb-6 flex justify-center">
          <input
            type="text"
            value={active.itemName}
            onChange={(e) => setActive({ ...active, itemName: e.target.value })}
            placeholder="Item Name"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
          />
        </div>
        <div className="mb-6 flex justify-center">
          <input
            type="number"
            value={active.itemQuantity}
            onChange={(e) =>
              setActive({ ...active, itemQuantity: e.target.value })
            }
            placeholder="Quantity"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
          />
        </div>
        <div className="mb-6 flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-blue-500 text-white rounded-lg font-medium shadow-md transition-transform duration-200 hover:bg-blue-700 hover:scale-105"
          >
            setactive
          </button>
        </div>
      </form>
    </div>
  );
}

export default Admin;
