import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Profile = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{
        padding: "50px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div style={{ fontWeight: "bold", color: "black" }}>Profile</div>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div
          style={{
            backgroundColor: "lightgray",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "1rem 1rem",
            background: "#dee2e6",
          }}
        >
          <div>First Name</div>
          <div>Jean Frem</div>
        </div>
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Last Name" variant="filled" />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Email" variant="filled" />
      </Box>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "50ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="Phone" variant="filled" />
      </Box>
      <div
        onClick={() => {
          navigate("/address");
        }}
      >
        Addresses
      </div>
    </div>
  );
};

export default Profile;
