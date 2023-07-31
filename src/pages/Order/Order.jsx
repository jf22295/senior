import { useNavigate } from "react-router-dom";

const Order = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>Title order history</div>
      {[
        {
          id: "12345",
          date: "11-11-11",
          restaurant: "1234-Jounieh",
          amount: "$123",
        },
        {
          id: "51231",
          date: "11-22-11",
          restaurant: "1234-Jounieh",
          amount: "$123",
        },
        {
          id: "332111",
          date: "11-11-31",
          restaurant: "1234-Jounieh",
          amount: "$123",
        },
        {
          id: "112333",
          date: "11-11-12",
          restaurant: "1234-Jounieh",
          amount: "$123",
        },
      ].map((order, i) => {
        return (
          <div
            onClick={() => {
              navigate(`/order/${order.id}`);
            }}
            key={`order-${i}`}
            style={{
              display: "flex",
              padding: "1rem",
              backgroundColor: "lightgray",
              borderRadius: "12px",
              justifyContent: "space-between",
              margin: "1rem 0",
              alignItems: "center",
            }}
          >
            <div>{order.restaurant}</div>
            <div>{order.amount}</div>
            <div>{order.date}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Order;
