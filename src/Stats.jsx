function Stats({ total, packed, percentage }) {
  return (
    <footer>
      You have {total} items on your list, and you already packed {packed} (
      {percentage}%)
    </footer>
  );
}
export default Stats;
