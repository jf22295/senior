import { useParams } from "react-router-dom";

const OrderDetails = () => {
  const { orderId } = useParams();
  console.log(orderId);

  return (
    <div>
      <div>Title Order restaurant</div>
      <div>Date</div>
      <div>Products list</div>
      <div>Delivery Charge</div>
      <div>Subtotal</div>
      <div>Total</div>
    </div>
  );
};

export default OrderDetails;
