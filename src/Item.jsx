function Item({ item, onToggleItem, onDeleteData }) {
  return (
    <>
      <input
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />

      <span className={item.packed ? "line-through" : ""}>
        {item.quantity} {item.item}{" "}
        <button onClick={() => onDeleteData(item.id)}>X</button>
      </span>
    </>
  );
}
export default Item;
