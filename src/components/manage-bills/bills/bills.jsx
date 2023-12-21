import BillsNav from "../../../routes/bills-nav/bills-nav";
import { useLocation } from "react-router-dom";
import Airtime from "../airtime/airtime";
import AirtimeReview from "../airtime-review/airtime-review";

const Bills = () => {
    const location = useLocation();
    return ( 
        <div className="flex">
            <BillsNav/>
            {location.pathname === "/dashboard/manage-bills/airtime" && <Airtime/>}
            {location.pathname.includes("airtime-review") && <AirtimeReview/>}
        </div>
     );
}
 
export default Bills;