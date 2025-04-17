//A special hook which can extract the exact error which we are getting in our website
import { useRouteError } from "react-router-dom";
const Error = () => {
    const error = useRouteError();
    console.log("Hello from Error Component");
    console.log("Route Error:", error);

    return (
        <div className="error">
            <h1>Oops! Page Not Found!</h1>
            <br /><br />
            <p>We're sorry, but the page you are looking for does not exist. It might have been moved or deleted.</p>
            <p>{error?.statusText || error?.message || "No error details available."}</p>
        </div>
    );
}

export default Error;

