import React from "react";
import ReactDOM from "react-dom"; 
// Ensure the correct import
//importing if we have default export
import Header from "./Components/Header";
import Body from "./Components/Body";
import { RouterProvider, createBrowserRouter,Outlet} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import ResturantMenu from "./Components/ResturantMenu";
import { Provider } from "react-redux";
import appStore from "./utilis/appStore";
import Cart from "./Components/Cart";
//Let's link the components to appLayout itself meaning that We will not change anything 

const AppLayout = () => {
    return (
        <Provider store={appStore}>
        <div className="container">
            <Header />
            {/* Now no need of body as component will be changing based on the clicks */}
            {/* <Body/> */}
            <Outlet/>
        </div>
        </Provider>
    );
};
//Returns array of objects
//Create a error element so that if the url is invalid we can have a error message for the user


/* 
This is how u do simple routing 
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>
    },
    {
        path:"/about",
        element:<About/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
]);
*/

/* Now we will do child routing so that we can on;y change our body element and not things like header and footer */

const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                 path:"/resturant/:resID",
                 element:<ResturantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
               
        ],
        errorElement:<Error/>
    },
    
]);
// Ensure the correct import and usage
const root = ReactDOM.createRoot(document.querySelector('.root'));

// root.render(<AppLayout />);
//Way to render the router element :->

root.render(<RouterProvider router={appRouter}/>);