import TransferNav from "../../../routes/transfer-nav/transfer-nav";
import { useLocation } from "react-router-dom";
import Recipient from "../recipient/recipient";
import Amount from "../amount/amount";
import BankReviewAndPa from "../bank-review-and-pay/bank-review-and-pay";
const BusinessForm = () => {

    const location = useLocation();
    return ( 
        <div>
            <TransferNav/>
            <div>
                {location.pathname.includes("recipient") && <Recipient />}
                {location.pathname.includes("amount") && <Amount />}
                {location.pathname.includes("review-and-pay") && <BankReviewAndPa />}
            </div>
        </div>
     );
}
 
export default BusinessForm;