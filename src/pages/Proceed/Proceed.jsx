import { useNavigate } from "react-router-dom";

const Proceed = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>restaurant name</div>
      <div>subtotal</div>
      <div>delivery</div>
      <div>Total</div>
      <div>Address default, or choose another one..</div>
      <div>Payment type</div>
      <div>Cash on delivery</div>
      <div>Pay with Card</div>
      <div
        onClick={() => {
          // eslint-disable-next-line no-constant-condition
          if (false) {
            // FIXME: change true to get value of checkbox, if cash on delivery order..
          } else {
            navigate("/proceed/pay");
          }
        }}
      >
        Proceed
      </div>
    </div>
  );
};

export default Proceed;
