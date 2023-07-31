import { useParams, useNavigate } from "react-router-dom";

const Category = ({ type }) => {
  const navigate = useNavigate();
  const { categoryId } = useParams();
  console.log(type, categoryId);
  return (
    <div>
      <div>Category Name</div>
      <div>
        <div>Restaurants Of Delivery</div>
        <div>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((restaurant, i) => {
            return (
              <div
                onClick={() => {
                  if (type === "DELIVERY") {
                    navigate(`/delivery/restaurant/${restaurant}`, {
                      state: { backLink: `/delivery/category/${categoryId}` },
                    });
                  } else {
                    navigate(`/reservation/restaurant/${restaurant}`, {
                      state: {
                        backLink: `/reservation/category/${categoryId}`,
                      },
                    });
                  }
                }}
                key={`restaurant-${i}`}
              >
                Restaurant {restaurant}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Category;
