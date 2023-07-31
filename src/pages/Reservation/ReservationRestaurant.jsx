import { useParams } from "react-router-dom";
import Slider from "@mui/material/Slider";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const ReservationRestaurant = () => {
  const { restaurantId } = useParams();
  console.log(restaurantId);
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
      <div>
        <div>Restaurant Name:</div>
        <div> Malak al taouk</div>
      </div>
      <div>Restaurant Description</div>
      <div>
        Number of persons:
        <Slider
          aria-label="number of persons"
          defaultValue={1}
          valueLabelDisplay="auto"
          step={1}
          marks
          min={1}
          max={20}
          width={50}
        ></Slider>
      </div>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["DateTimePicker"]}>
          <DateTimePicker label="When?" />
        </DemoContainer>
      </LocalizationProvider>
      <FormControl>
        <FormLabel id="demo-row-radio-buttons-group-label">Flexible?</FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
        >
          <FormControlLabel value="female" control={<Radio />} label="Yes" />
          <FormControlLabel value="male" control={<Radio />} label="No" />
        </RadioGroup>
      </FormControl>
      <Stack spacing={2} direction="row">
        <Button variant="contained">Submit</Button>
      </Stack>
    </div>
  );
};

export default ReservationRestaurant;
