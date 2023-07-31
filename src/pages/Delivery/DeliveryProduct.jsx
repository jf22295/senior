import { useParams } from "react-router-dom";
import "./delivery.css";

const DeliveryProduct = () => {
  const { restaurantId, productId } = useParams();
  console.log(restaurantId, productId);
  return (
    <div>
      <div>Product Name</div>
      <div>Product Image</div>
      <div>Product price</div>
      <div>Product description</div>
      <div>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, i) => {
          return (
            <div
              onClick={() => {
                console.log("hello");
              }}
              key={`product-${i}`}
            >
              item {item}
            </div>
          );
        })}
      </div>
      <div>Text area instructions</div>
      <div>Quantity</div>
      <div>Add to cart</div>
    </div>
  );
};

export default DeliveryProduct;
