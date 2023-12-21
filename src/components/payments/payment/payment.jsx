import SubTransNav from "../../../routes/sub-trans-nav/sub-trans-nav";
import PaymentLink from "../payment-link/payment-link";
import CreatePaymentLink from "../create-payment-link/create-payment-link";
import PaymentDetails from "../payment-details/payment-details";
import { useLocation } from "react-router-dom";
import ViewPayment from "../view-payment/view-payment";
import ViewPaymentWithList from "../view-payment-with-list/view-payment-with-list";


const Payment = () => {
    const location =  useLocation();
    return ( 
        <div className="flex">
            <SubTransNav/>
            {location.pathname === '/dashboard/payments' && <PaymentLink/>}
            {location.pathname.includes("create-link") && <CreatePaymentLink/>}
            {location.pathname.includes("payment-details") && <PaymentDetails/>}
            {location.pathname === "/dashboard/payments/view-payment" && <ViewPayment/>}
            {location.pathname.includes("view-payment-with-list") && <ViewPaymentWithList/>}
        </div>
     );
}
 
export default Payment;