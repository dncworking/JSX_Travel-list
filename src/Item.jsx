function Item({ item, onToggleItem }) {
  return (
    <>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />

      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.item}
      </span>
    </>
  );
}
export default Item;
