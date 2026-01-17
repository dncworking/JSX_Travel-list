import { useState } from "react";

function Form({ onSendData }) {
  const [item, setItem] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!item.trim()) return;

    onSendData(item, quantity);
    setItem("");
    setQuantity(1);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-[#e5771f] flex text-[#5a3e2b] justify-center p-5 font-medium items-center gap-5"
    >
      <h3 className="text-xl">What do you need for your trip?</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
        className="bg-[#ffebb3] p-2 rounded-2xl"
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="bg-[#ffebb3] p-2 rounded-2xl"
      />
      <button className="bg-sky-400 h-10 w-20 rounded-2xl uppercase cursor-pointer">
        Add
      </button>
    </form>
  );
}
export default Form;
