import SubTransNav from "../../../routes/sub-trans-nav/sub-trans-nav";
import PaymentLink from "../payment-link/payment-link";
import CreatePaymentLink from "../create-payment-link/create-payment-link";
import PaymentDetails from "../payment-details/payment-details";
import { useLocation } from "react-router-dom";


const Payment = () => {
    const location =  useLocation();
    return ( 
        <div className="flex">
            <SubTransNav/>
            {location.pathname === '/dashboard/payments' && <PaymentLink/>}
            {location.pathname.includes("create-link") && <CreatePaymentLink/>}
            {location.pathname.includes("payment-details") && <PaymentDetails/>}
        </div>
     );
}
 
export default Payment;