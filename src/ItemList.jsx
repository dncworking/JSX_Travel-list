import Item from "./Item.jsx";

function ItemList({ items, onToggleItem, onDeleteData }) {
  return (
    <>
      <section className="bg-[#5a3e2b] flex flex-wrap  gap-4 p-8 ">
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            onToggleItem={onToggleItem}
            onDeleteData={onDeleteData}
          />
        ))}
      </section>
    </>
  );
}
export default ItemList;
