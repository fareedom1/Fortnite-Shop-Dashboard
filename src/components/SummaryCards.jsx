function SummaryCards({ items }) {
    if (!items.length) return null;
  
    const mostExpensive = items.reduce((max, item) => item.price > (max?.price || 0) ? item : max, null);
    const oldest = items.reduce((min, item) => new Date(item.release) < new Date(min?.release || Date.now()) ? item : min, null);
    const newest = items.reduce((max, item) => new Date(item.release) > new Date(max?.release || 0) ? item : max, null);
  
    return (
      <div className="summary-cards">
        <div>
          <strong>Most Expensive:</strong> {mostExpensive?.name} <br />
          {mostExpensive?.price} V-Bucks
        </div>
        <div>
          <strong>Oldest:</strong> {oldest?.name} <br />
          {oldest?.release ? new Date(oldest.release).toLocaleDateString() : "Unknown"}
        </div>
        <div>
          <strong>Newest:</strong> {newest?.name} <br />
          {newest?.release ? new Date(newest.release).toLocaleDateString() : "Unknown"}
        </div>
      </div>
    );
  }
  export default SummaryCards;
  