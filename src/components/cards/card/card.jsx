import CardNav from "../../../routes/card-nav/card-nav";
import { useLocation } from "react-router-dom";
import CardDetails from "../card-details/card-details.";
import CardReviewAndPay from "../card-review-and-pay/card-review-and-pay";

const Card = () => {
    const location = useLocation();
    return ( 
        <div>
            <CardNav />
            {location.pathname.includes('card-detail') && <CardDetails />} 
            {location.pathname.includes('review-and-pay') && <CardReviewAndPay />} 
        </div>
     );
}
 
export default Card;