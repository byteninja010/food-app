import { useEffect,useState } from "react";
const useMenuItems=(resID)=>{
    const [MenuItems,setMenuItems]=useState([]);
    useEffect(()=>{
        fetchData2();

    },[]);
    const fetchData2=async()=>{
        const data=await fetch(
            `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.8537051&lng=80.9484195&restaurantId=${resID}`
        );
        const json2=await data.json();
        console.log(json2.data.cards);
        setMenuItems(
            json2.data.cards
        );
    }
    return MenuItems;
   
}
export default useMenuItems;