export default function TabButton({ children, onSelect }) {
  console.log("Tab component executing");
  return (
    <li>
      <button onClick={onSelect}>{children}</button>
    </li>
  );
}
