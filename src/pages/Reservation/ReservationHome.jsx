import { useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";

const ReservationHome = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <div>Categories in circles</div>
        <div className="container">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((category, i) => {
            return (
              <Avatar
                className="avatars"
                src="https://picsum.photos/400/400"
                onClick={() => {
                  navigate(`/reservation/category/${category}`);
                }}
                key={`category-${i}`}
              >
                Category {category}
              </Avatar>
            );
          })}
        </div>
      </div>
      <div>
        <div>Restaurants Of Reservation</div>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((restaurant, i) => {
            return (
              <div key={`restaurant-${i}`}>
                <img
                  src="https://picsum.photos/400/400"
                  onClick={() => {
                    navigate(`/reservation/restaurant/${restaurant}`);
                  }}
                />
                Restaurant {restaurant}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ReservationHome;
