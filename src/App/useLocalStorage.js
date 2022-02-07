import React, { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getLocalStorage = localStorage.getItem(itemName);
      let parsedItem;

      if (!getLocalStorage) {
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      } else {
        parsedItem = JSON.parse(getLocalStorage);
      }

      setItem(parsedItem);
      setLoading(false);
    }, 2000);
  });

  const saveItem = (newItem) => {
    const newItemLS = JSON.stringify(newItem);
    localStorage.setItem(itemName, newItemLS);
    setItem(newItem);
  };

  return {
    item,
    saveItem,
    loading,
  };
}

export { useLocalStorage };
