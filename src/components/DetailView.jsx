import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function DetailView() {
  const { id } = useParams(); // Get item ID from URL
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all shop data, then find the item by ID
    fetch("https://fortnite-api.com/v2/shop")
      .then(res => res.json())
      .then(data => {
        const allItems = data.data.entries
          .filter(entry => entry.brItems)
          .flatMap(entry => 
            entry.brItems.map(item => ({
              ...item,
              price: entry.finalPrice
            }))
          );
        
        // Find the specific item
        const foundItem = allItems.find(item => item.id === id);
        setItem(foundItem);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="loading">Loading...</div>;
  if (!item) return <div className="loading">Item not found</div>;

  return (
    <div className="detail-container">
      <h1>{item.name}</h1>
      <img 
        src={item.images.featured??item.images.icon} 
        alt={item.name} 
        width={300}
      />
      <p><strong>Description:</strong> {item.description}</p>
      <p><strong>Type:</strong> {item.type.displayValue}</p>
      <p><strong>Rarity:</strong> {item.rarity.displayValue}</p>
      <p><strong>Price:</strong> {item.price} V-Bucks</p>
      <p><strong>Added:</strong> {new Date(item.added).toLocaleDateString()}</p>
    </div>
  );
}

export default DetailView;
