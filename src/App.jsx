import { useState, useEffect } from "react";

import "./App.css";
import Header from "./Header";
import Form from "./Form";
import Stats from "./Stats";
import ItemList from "./ItemList";

function App() {
  const [items, setItems] = useState([]);

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

  const deleteData = async (id) => {
    try {
      const requestOptions = {
        method: "DELETE",
      };
      const response = await fetch(
        `http://localhost:3000/items/${id}`,
        requestOptions
      );
      setItems((items) => items.filter((item) => item.id !== id));
      if (response.ok) {
        getData();
      } else {
        throw new Error("Error");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const toggleItem = async (id) => {
    const currentItem = items.find((item) => item.id === id);

    try {
      await fetch(`http://localhost:3000/items/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          packed: !currentItem.packed,
        }),
      });

      getData(); 
    } catch (error) {
      console.error(error);
    }
  };

  const totalItems = items.length;
  const packedItems = items.filter((item) => item.packed).length;
  const percentage =
    totalItems === 0 ? 0 : Math.round((packedItems / totalItems) * 100);

  return (
    <>
      <div className="flex flex-col h-screen">
        <Header />
        <Form onSendData={sentData} />
        <main className="flex-1 overflow-y-auto bg-[#5a3e2b]">
          <ItemList
            items={items}
            onToggleItem={toggleItem}
            onDeleteData={deleteData}
          />
        </main>
        <Stats
          total={totalItems}
          packed={packedItems}
          percentage={percentage}
        />
      </div>{" "}
    </>
  );
}

export default App;
