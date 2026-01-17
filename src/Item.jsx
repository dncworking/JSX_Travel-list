function Item({ item, onToggleItem, onDeleteData }) {
  return (
    <>
      <div className="p-8 flex gap-2">
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onToggleItem(item.id)}
        />

        <span
          className={`text-[#ffebb3]  ${
            item.packed ? "line-through opacity-60" : ""
          } `}
        >
          {item.quantity} {item.item}{" "}
          <button
            className="cursor-pointer hover:scale-80 transition-transform"
            onClick={() => onDeleteData(item.id)}
          >
            ❌
          </button>
        </span>
      </div>
    </>
  );
}
export default Item;
