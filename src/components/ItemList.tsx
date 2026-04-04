import { useItems } from "../context/ItemsContext";

function ItemList() {
  const { items, removeItem } = useItems();

  if (items.length === 0) {
    return <p>No items yet. Add your first item.</p>;
  }

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>
          {item.title}
          <button onClick={() => removeItem(item.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
}

export default ItemList;