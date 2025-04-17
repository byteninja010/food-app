import { Veg, NonVeg } from "../utilis/Const";
import { useDispatch } from "react-redux";
import { addItem } from "../utilis/cartSlice";
const MenuCard = ({ food }) => {
    //Rating color decider
    const getRatingClassName = (rating) => {
        const numericRating = parseFloat(rating); 
        if (numericRating>= 4.5) {
          return 'high-high-rating'; // Class for high ratings
        } 
        else if(numericRating>=4){
            return 'high-rating';
        }
        else if (numericRating>= 3.0) {
          return 'medium-rating'; // Class for moderate ratings
        } else {
          return 'low-rating'; // Class for low ratings
        }
      };
  //   const {foodItems}=food?.card?.info;
  const dispatch=useDispatch();
    const handleAddItems=(food)=>{
      //Calliang a dispatch action
      alert("Item is added in cart");
      dispatch(addItem(food));

    }
  const rating = food?.card?.info?.ratings?.aggregatedRating?.rating;
  const ratingClassName = getRatingClassName(rating);
    
  return (
    <div className="menu-container">
      <div className="menu-card">
        <div className="details">
          <div className="logo">
            <img src={food?.card?.info?.isVeg ? Veg : NonVeg} alt="" />
          </div>
          <div className="item-title">{food?.card?.info?.name}</div>
          <div className="item-price">
            ₹
            {food?.card?.info?.defaultPrice / 100 ||
              food?.card?.info?.price / 100}
          </div>
        
          {food?.card?.info?.ratings?.aggregatedRating?.rating &&
            food?.card?.info?.ratings?.aggregatedRating?.ratingCount && (
              <div className={`item-rating ${ratingClassName}`}>
                {food.card.info.ratings.aggregatedRating.rating}(
                {food.card.info.ratings.aggregatedRating.ratingCount})
              </div>
            )}
          <div className="item-desc">{food?.card?.info?.description}</div>
        </div>
        <div className="item-image">
          <img
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${food?.card?.info?.imageId}`}
            alt="Image Not Avaliable"
            height={"144px"}
            width={"152px"}
          />
          <button className="item-btn" onClick={()=>handleAddItems(food)}>ADD</button>
        </div>
      </div>

      <div className="item-line"></div>
    </div>
  );
};
export default MenuCard;
