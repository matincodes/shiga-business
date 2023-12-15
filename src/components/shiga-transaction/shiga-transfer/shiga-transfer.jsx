import TransferNav from "../../../routes/transfer-nav/transfer-nav";
import { useLocation } from "react-router-dom";

const ShigaTransfer = () => {
    const location = useLocation();
    return ( 
        <div>
            <TransferNav path="shiga-transfer"/>
            {}
        </div>
     );
}
 
export default ShigaTransfer;