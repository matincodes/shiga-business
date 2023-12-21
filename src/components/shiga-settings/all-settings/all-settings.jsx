import SettingsNav from "../../../routes/settings-nav/settings.nav";
import { useLocation } from "react-router-dom";
import Profile from "../profile/profile";
import BusinessProfile from "../business-profil/e/business-profile";
import SettlementAccounts from "../settlement-accounts/settlement-accounts";
import FeesAndEarnings from "../fees-and-earnings/fees-and-earnings";
import PaymentMethods from "../payment-methods/payment-methods";
import NotificationPreferences from "../notification-preferences/notification-preferences";

const AllSettings = () => {
    const location = useLocation();
    return ( 
        <div className="flex">
            <SettingsNav/>
            {location.pathname === "/dashboard/settings/profile" && <Profile/>}
            {location.pathname.includes("business-profile") && <BusinessProfile/>}
            {location.pathname.includes("settlement-accounts") && <SettlementAccounts/>}
            {location.pathname.includes("fees&earnings") && <FeesAndEarnings/>}
            {location.pathname.includes("payment-methods") && <PaymentMethods/>}
            {location.pathname.includes("notification") && <NotificationPreferences/>}
        </div>
     );
}
 
export default AllSettings;