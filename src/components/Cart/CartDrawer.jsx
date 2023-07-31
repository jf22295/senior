import { Drawer } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ state, setState }) => {
  const navigate = useNavigate();
  return (
    <Drawer
      anchor={"right"}
      open={Boolean(state)}
      onClose={() => {
        setState(false);
      }}
    >
      <div style={{ minWidth: "300px" }}>
        <div>Cart</div>
        {[1, 2, 3, 4].map((item, i) => {
          return <div key={`item-${i}`}>Item {item}</div>;
        })}
        <div>Subtotal</div>
        <div>Total</div>
        <div
          onClick={() => {
            navigate("/proceed");
            setState(false);
          }}
        >
          Proceed
        </div>
      </div>
    </Drawer>
  );
};

export default CartDrawer;
