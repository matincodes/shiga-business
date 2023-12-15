import InfoNav from "../../../routes/info-nav/info-nav";
import BusinessInfo from "../business-info/business-info";
import { useLocation } from "react-router-dom";
import VerifyBusiness from "../verify-business/verify-business";
import OwnersInfo from "../owners-info/owners-info";
import DirectorsInfo from "../directors-info/directors-info";

const Business = () => {
    const location = useLocation();

    return ( 
        <div>
            <InfoNav path="make-a-transfer"/>
            {location.pathname.includes('business-info') && <BusinessInfo />}   
            {location.pathname.includes('verify-business') && <VerifyBusiness />}  
            {location.pathname.includes('owners-info') && <OwnersInfo />}  
            {location.pathname.includes('directors-info') && <DirectorsInfo />}  
        </div>
     );
}
 
export default Business;