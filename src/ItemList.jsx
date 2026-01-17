import Item from "./Item.jsx";

function ItemList({ items, onToggleItem, onDeleteData }) {
  return (
    <>
      <p>list</p>
      <section>
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
