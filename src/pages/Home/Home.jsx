import { useNavigate } from "react-router-dom";
import deliveryPic from "../../images/brett-jordan-phUtWl8RyFE-unsplash.jpg";
import reservationPic from "../../images/reservation_pic.jpg";
import "./home.css";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="home_page_container" style={{ display: "flex" }}>
      <div
        onClick={() => {
          navigate("/delivery");
        }}
      >
        <img
          src={deliveryPic}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "500px",
            height: "500px",
            marginRight: "30px",
            marginBottom: "30px",
            border: "2px solid lightgray",
          }}
        />

        <div className="delivery_picture">Delivery</div>
      </div>
      <div
        onClick={() => {
          navigate("/reservation");
        }}
      >
        <img
          src={reservationPic}
          style={{
            display: "flex",
            justifyContent: "center",
            width: "500px",
            height: "500px",
            marginRight: "30px",
            marginBottom: "30px",
            border: "2px solid lightgray",
          }}
        />
        <div className="reservation_picture">Reservation</div>
      </div>
    </div>
  );
};

export default Home;
