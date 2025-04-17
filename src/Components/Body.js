//We also have to import react hooks and by the syntax we can conclude that they are named exports
//import { resList } from "../utilis/MockData";
import ResCard from "./ResCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  /*To define a react hook the syntax is this now we can change the function
The second attribute in the constant function is the function which will sync the ui and data
We can name the function as anything we want but the good practice is to name it like set(the main name which is given to the object which is listOfRes here) 
  
  use effect is called after the whole ui is rendered
*/

  //We have linked api with our app now our app is taking data from the swiggy's live api
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.8537051&lng=80.9484195&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setListOfRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredList(
        json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
      );
  };

  const [listOfRes, setListOfRes] = useState([]);
  const [filteredList,setFilteredList]=useState([]);
  const [searchText, setSearchText] = useState("");

  if (listOfRes.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <button
        className="filter-btn"
        onClick={() => {
          const filterList = listOfRes.filter(
            (resturant) => resturant.info.avgRating >= 4.5
          );
          console.log(filteredList);
          setFilteredList(filterList);
        }}
      >
        Top Resturants
      </button>
      <div className="search-box">
        <input
          type="text"
          className="search"
          placeholder="Search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />
        <button
          onClick={() => {
            const filterRes = listOfRes.filter((res) =>
             res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredList(filterRes);
          }}
        >
          Search
        </button>
      </div>

      <h1>Food Deleivering in your area</h1>
      <div className="card-container">
        {
          /*      Key is necessary Why?? The key is necessary the simple answer it this optimises our code how??
            Let's say we decided to add a new resCard now as all card are same there are having no unique id 
            Our react will rerender all the cards so that it can insert a new card as for him all cards are 
            identical he does not knows that new card came was rendered or not so for saving it we give them
            a key

            As stated by official docs of react giving key as index is a bad practice*/
          filteredList.map((resturant) => (
         <Link key={resturant.info.id} to={`/resturant/${resturant.info.id}`}><ResCard resData={resturant} /></Link>   
          ))
        }
      </div>
    </div>
  );
};
export default Body;
