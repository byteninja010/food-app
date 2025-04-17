
//importing if we have name script
import { LOGO } from "../utilis/Const";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utilis/useOnlineStatus";
import { useSelector } from "react-redux";
const Header = () => {
    const onlineStatus=useOnlineStatus();
    //Subscribing to the data ie reading the data
    const cart=useSelector((store)=>store.cart.items);
    console.log(cart);
    return (
        <div className="header">
            <img className="logo-main" src={LOGO} alt="Logo" />
            <ul className="list">
                {/* So now we will link the elements to the links or routes we have generate 
                we will not be using anchor tag as it will make our website slow as anchor tag will refre
                sh whole website and it's like everything will load again we can achieve the same by using link tag
                which only refreshes the component so it's very effective and fast */}
                <li>Online Status:{onlineStatus?"✅":"❌"}</li>
                <li><Link to={"/"}>Home</Link></li>
                <li><Link to={"/about"}>About Us</Link></li>
                <li><Link to={"/contact"}>Contact Us</Link></li>
                <li><Link to={"/cart"}>Cart({cart.length})</Link></li>
                <li>Sign IN</li>
            </ul>
        </div>
    );
};

export default Header;