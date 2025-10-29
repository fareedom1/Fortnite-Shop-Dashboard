import ShopItem from "./ShopItem";
function ShopItemList({ items }) {
  return (
    <ul>
      {items.map((item, idx) =>
        <ShopItem key={item.id + idx} item={item} />
      )}
    </ul>
  );
}
export default ShopItemList;
