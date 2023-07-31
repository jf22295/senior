import { useNavigate } from "react-router-dom";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Addresses = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div
        style={{
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div style={{ fontWeight: "bold", color: "black" }}>Addresses</div>
      </div>
      {[1, 2, 3, 4].map((address, i) => {
        return (
          <div
            key={`address-${i}`}
            onClick={() => {
              navigate(`/address/edit/${address}`);
            }}
          >
            Address {address}
          </div>
        );
      })}
      <div
        onClick={() => {
          navigate("/address/new");
        }}
      >
        <Stack spacing={2} direction="row">
          <Button variant="contained"> Add New Address</Button>
        </Stack>
      </div>
    </div>
  );
};

export default Addresses;
