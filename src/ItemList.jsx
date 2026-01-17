import Item from "./Item.jsx";

function ItemList({ items, onToggleItem }) {
  return (
    <>
      <p>list</p>
      <section>
        {items.map((item) => (
          <Item key={item.id} item={item} onToggleItem={onToggleItem} />
        ))}
      </section>
    </>
  );
}
export default ItemList;
