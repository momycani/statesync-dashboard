import { useState } from "react";
import { useItems } from "../context/ItemsContext";

function AddItemForm() {
  const [title, setTitle] = useState("");
  const { addItem } = useItems();

  function handleAddItem() {
    if (!title.trim()) return;

    addItem(title);
    setTitle("");
  }

  return (
    <div>
      <input
        type="text"
        placeholder="Enter a task or an item..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <button onClick={handleAddItem} disabled={!title.trim()}>Add Item</button>
    </div>
  );
}

export default AddItemForm;