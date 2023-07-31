import { useParams, useLocation, useNavigate } from "react-router-dom";
import "./delivery.css";

const DeliveryRestaurant = () => {
  const { restaurantId } = useParams();
  const { state } = useLocation();
  const navigate = useNavigate();
  console.log(restaurantId);

  return (
    <div>
      <div>Resto name</div>
      <div>
        <div>List Of products:</div>
        <div className="container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((product, i) => {
            return (
              <div key={`product-${i}`} className="restaurant_product">
                <img
                  src="https://picsum.photos/400/400"
                  onClick={() => {
                    navigate(
                      `/delivery/restaurant/${restaurantId}/product/${product}`,
                      {
                        state,
                      }
                    );
                  }}
                />
                Product {product}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DeliveryRestaurant;
