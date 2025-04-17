import useMenuItems from "../utilis/useMenuItems";
import ResCategory from "./ResCategory";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { useState } from "react";

const ResturantMenu=()=>{
    //As this was returning object consisting resId so basically we took the resId from here and gave it a new variab;e
    const {resID}=useParams();
 /*   So this is our custom hook 
    So question arises ki need kya hai custom hook ki ??

    So the simple answer is koi need nhi hai custom hook is just like we have inclosed our function into something and now we are accessing it why
    we have done it ?? Bcs ham chahate ki hamare ek component ek kaam kre abhi tak ye compnent do kaam kr rha tha ye data read kr rha tha along that it was trying to show the data on the ui but now it is just showing the data in the ui fetching is done by a diffrent function or customHOooK :)
    */
    const MenuItems=useMenuItems(resID);
    const [showIndex,setShowIndex]=useState(0);
    if (MenuItems.length === 0) {
        return <Shimmer />;
      }
      const{areaName,avgRatingString,costForTwoMessage,cuisines,name,totalRatingsString,sla,feeDetails}=MenuItems[2]?.card?.card?.info
      const FoodItemsCollection=MenuItems[4].groupedCard.cardGroupMap.REGULAR.cards;
      const FoodItemsFiltered=FoodItemsCollection.filter((c)=>
        c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )
     const FoodItems=FoodItemsFiltered[0].card.card.itemCards;
 
      
  return(
    <div className="menu">
        <h1 className="title">{name}</h1>
        <div className="res-details-container">
            <div className="res-details">
                <div className="res-details-1">
                    <div className="rating">
                        {avgRatingString+"( "+totalRatingsString+" )"}
                    </div>
                    <div className="dot">
                        •
                    </div>
                    <div className="cost-of-two">{costForTwoMessage}</div>
                </div>
                <div className="cuisines">
                    {cuisines.join(",")}
                </div>
                <div className="location">
                    <div className="outlet">
                    Outlet:-<p className="outlet-loc">{areaName}</p>
                    </div>
                    <div className="time">
                        {sla.slaString}
                    </div>
                    
                </div>
                <hr className="row-line" />
                <div className="delivery">
                    <img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_40,h_40/v1648635511/Delivery_fee_new_cjxumu" alt="" height={"20px"} width={"20px"} />
                    <div className="del-details">
                    <b>{sla.lastMileTravelString}</b> | ₹{feeDetails.totalFee / 100} Delivery fee will apply
                    </div>
                </div>
            </div>
        </div>
        <div className="menu-name">
            MENU
        </div>
        <div className="menu-section">
            {
                FoodItemsFiltered.map((category,index)=>(
                    <ResCategory key={category?.card.card?.title} data={category?.card?.card} showItems={index===showIndex ? true:false} setShowIndex={()=>{
                        setShowIndex(index);
                    }}/>
                )
                
                )
            }
            {/* <MenuCard food={FoodItems[12]}/>
            <MenuCard food={FoodItems[1]}/>
            <MenuCard food={FoodItems[2]}/> */}
            
        </div>
    </div>
  ); 
};
export default ResturantMenu;