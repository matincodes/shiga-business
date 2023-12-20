import TransferNav from "../../../routes/transfer-nav/transfer-nav";
import { useLocation } from "react-router-dom";

const ShigaTransfer = () => {
    const location = useLocation();
    return ( 
        <div>
            <TransferNav path="shiga-transfer"/>
            {location.pathname.includes()}
        </div>
     );
}
 
export default ShigaTransfer;