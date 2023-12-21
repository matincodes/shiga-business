import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const CardNav = () => {
    const location = useLocation();
    return ( 
        <div className="flex justify-between py-3 px-7">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" viewBox="0 0 6 9" fill="none">
                    <path d="M4.74937 7.99902L1.25 4.49966L4.75 0.999656" stroke="#99999C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className=" flex justify-center items-center
            ">
                <Link to='/dashboard/cards/card-detail' className={`${location.pathname.includes('card-detail') ? 'active': ''} link`}>
                    Card Details
                </Link>
                <Link  to='/dashboard/cards/review-and-pay' className="link">
                    Review and Pay
                </Link>
            </div>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                    <path d="M1.11069 9.38895L5.0002 5.49944M5.0002 5.49944L8.88886 1.61077M5.0002 5.49944L1.11111 1.61035M5.0002 5.49944L8.88928 9.38853" stroke="#99999C" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div>
        </div>
     );
}
 
export default CardNav;