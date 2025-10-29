function SearchBar({ search, setSearch, minCost, setMinCost, itemType, setItemType }) {
    const itemTypes = [
      "All", "Outfit", "Pickaxe", "Back Bling", "Emote", "Wrap",
      "Glider", "Music", "Loading Screen"
    ];
    return (
      <div className="search-bar-box">
        <input
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search by name"
        />
        <select
          value={minCost}
          onChange={e => setMinCost(Number(e.target.value))}
        >
          <option value={9999}>All Costs</option>
          <option value={200}>Up to 200 V-Bucks</option>
          <option value={500}>Up to 500 V-Bucks</option>
          <option value={800}>Up to 800 V-Bucks</option>
          <option value={1200}>Up to 1200 V-Bucks</option>
          <option value={1500}>Up to 1500 V-Bucks</option>
          <option value={2000}>Up to 2000 V-Bucks</option>
        </select>
        <select
          value={itemType}
          onChange={e => setItemType(e.target.value)}
        >
          {itemTypes.map(type =>
            <option key={type} value={type}>{type}</option>
          )}
        </select>
      </div>
    );
  }
  export default SearchBar;
  