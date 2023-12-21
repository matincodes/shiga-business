import { Link } from "react-router-dom";

const BillsNav = () => {
    return ( 
        <div className="flex h-full">
            <ul className="flex flex-col pl-7 pr-10 border-r w-48">
                <li className="py-2">
                    <Link to="/dashboard/manage-bills/airtime">
                        Buy Airtime
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/manage-bills/data">
                        Mobile Data
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/manage-bills/cable-tv">
                        Cable TV
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/manage-bils/electricity">
                        Buy Electricity
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default BillsNav;