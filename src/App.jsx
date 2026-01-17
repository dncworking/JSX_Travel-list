import { useState, useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Stats from "./Stats";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);
  // 🔹 SIUNČIAM Į DB.JSON
  const sentData = async (item, quantity) => {
    try {
      const response = await fetch("http://localhost:3000/items", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          item,
          quantity,
          packed: false,
        }),
      });

      if (!response.ok) throw new Error("Failed to add item");

      getData();
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3000/items");
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleItem = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <>
      <Header />
      <Form onSendData={sentData} />
      <ItemList items={items} onToggleItem={toggleItem} />
      <Stats total={totalItems} packed={packedItems} percentage={percentage} />
    </>
  );
}

export default App;
