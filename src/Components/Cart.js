import { useSelector } from "react-redux";
import MenuCard from "./MenuCard";

const Cart=()=>{
    const cart=useSelector((store)=>store.cart.items);
    /*
    We can do the samething using like subscring to the store online like
    const cart=useSelector((store)=>store);
    and then doing cart=store.cart.items
    it is also same but it is pretty less efficent compared to our orignal way
    Par question ye hai ki aisa ho kyo rha hai To esa isliye ho rha kyonki store mein 
    hamare kayi saare items ho skte hai like carts so jab bhi main apne store ko subscribe
    kar rha tab issue ye hai ki koi bhi change jo store mein hoga uske kaaran like let's
    say ki store me change hua par cart mein koi change nhi hai to mujhe asal mein cart 
    render karne ki koi jarurat nhi thi par agar main doosre tareeke se likhunga to store
    mein to update hua hai is vajah se ye poora component render hoga which is less efficent
    
    */
    return(
        <div className="Cart">
            {
               cart.map((item)=>(
                <MenuCard food={item}/>
            ))   
            }
          
        </div>
       
    )
}
export default Cart;