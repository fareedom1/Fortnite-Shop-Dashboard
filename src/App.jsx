import { useEffect, useState } from "react";
import SummaryCards from "./components/SummaryCards";
import SearchBar from "./components/searchbar";
import ShopItemList from "./components/ShopItemList";
import "./App.css";

function App() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [minCost, setMinCost] = useState(9999);
  const [itemType, setItemType] = useState("All");

  useEffect(() => {
    fetch("https://fortnite-api.com/v2/shop")
      .then((res) => res.json())
      .then((data) => {
        setItems(data.data.entries || []);
      });
  }, []);

  // Create flat array of all shop items with price/release fields for filtering and summary
  const allShopItems = items
    .filter(entry => entry.brItems)
    .flatMap(entry =>
      entry.brItems.map(item => ({
        ...item,
        price: entry.finalPrice,
        release: item.added
      }))
    );

  const filteredItems = allShopItems.filter(item =>
    item.name.toLowerCase().includes(search.toLowerCase()) &&
    item.price <= minCost &&
    (itemType === "All" || item.type.displayValue === itemType)
  );

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Fortnite Shop</h1>
      <SummaryCards items={allShopItems} />
      <SearchBar
        search={search}
        setSearch={setSearch}
        minCost={minCost}
        setMinCost={setMinCost}
        itemType={itemType}
        setItemType={setItemType}
      />
      <ShopItemList items={filteredItems} />
    </div>
  );
}

export default App;