import { createContext, useContext, useState, type ReactNode } from "react";
import type { Item } from "../types/item";

type ItemsContextType = {
  items: Item[];
  addItem: (title: string) => void;
  removeItem: (id: number) => void;
};

const ItemsContext = createContext<ItemsContextType | undefined>(undefined);

export function ItemsProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<Item[]>([]);

  function addItem(title: string) {
    const trimmed = title.trim();

    if (!trimmed) return;

    setItems((prev) => {
        const exists = prev.some(
        (item) => item.title.toLowerCase() === trimmed.toLowerCase()
        );

        if (exists) return prev;

        const newItem: Item = {
        id: Date.now(),
        title: trimmed,
        };

        return [...prev, newItem];
    });
    }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }

  return (
    <ItemsContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </ItemsContext.Provider>
  );
}

export function useItems() {
  const context = useContext(ItemsContext);

  if (!context) {
    throw new Error("useItems must be used within ItemsProvider");
  }

  return context;
}