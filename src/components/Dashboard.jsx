import { useEffect, useState } from "react";
import SummaryCards from "./SummaryCards.jsx";
import SearchBar from "./searchbar.jsx";
import ShopItemList from "./ShopItemList.jsx";
import PieData from "./PieData.jsx";
import BarData from "./BarData.jsx";

import "../App.css";

function Dashboard() {

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

    // Prepare data for pie chart
    const typeCounts = {};
    allShopItems.forEach(item => {
        const type = item.type.displayValue;
        typeCounts[type] = (typeCounts[type] || 0) + 1;
    });
    const pieChartData = Object.entries(typeCounts).map(([name, value]) => ({ name, value }));
    
    // Count items by rarity
    const rarityCounts = {};
    allShopItems.forEach(item => {
    const rarity = item.rarity.displayValue;
    rarityCounts[rarity] = (rarityCounts[rarity] || 0) + 1;
    });
    const barChartData = Object.entries(rarityCounts).map(([name, value]) => ({ name, value }));

    return (
        <div className="dashboard-container">
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
            <div className="item-list-container">
                <ShopItemList items={filteredItems} />
            </div>
            <div className="charts-container">
                <PieData data={pieChartData} />
                <BarData data={barChartData} />
            </div>
        </div>
      );
}

export default Dashboard;