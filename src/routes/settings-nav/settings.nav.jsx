import { Link } from "react-router-dom";
const SettingsNav = () => {
    return ( 
        <div className="flex h-full">
            <ul className="flex flex-col pl-7 pr-10 border-r w-64">
                <li className="py-2">
                    <Link to="/dashboard/settings/profile">
                        My Profile
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/settings/business-profile">
                        Business Profile
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/settings/settlement-accounts">
                        Settlement Accounts
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/settings/team">
                        Team
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/settings/fees&earnings">
                        Fees & Earnings
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/settings/payment-methods">
                        Payment Methods
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/settings/notification">
                        Notification Preferences
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/settings/api-keys">
                        API Keys and Webhooks
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default SettingsNav;