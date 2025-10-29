function ShopItem({ item }) {
    return (
      <li className="shop-item">
        <img
          src={item.images.featured??item.images.icon??item.images.smallIcon}
          alt={item.name}
          width={50}
        />
        <div>
          <div className="shop-item-title">{item.name}</div>
          <div>
            {item.rarity.displayValue} — {item.type.displayValue}
            — {item.price} V-Bucks
            — Released {item.release ? new Date(item.release).toLocaleDateString() : "Unknown"}
          </div>
        </div>
      </li>
    );
  }
  export default ShopItem;
  
  