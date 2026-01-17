function Stats({ total, packed, percentage }) {
  return (
    <footer className="bg-[#76c7ad] text-[#5a3e2b] text-center font-semibold text-3xl p-6">
      You have {total} items on your list, and you already packed {packed} (
      {percentage}%)
    </footer>
  );
}
export default Stats;
