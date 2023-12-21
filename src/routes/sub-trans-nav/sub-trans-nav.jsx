import { Link} from "react-router-dom";
const SubTransNav = () => {
    return ( 
        <div className="flex h-full">
            <ul className="flex flex-col pl-7 pr-10 border-r w-48">
                <li className="py-2">
                    <Link to="/dashboard/payments">
                        Payment Link
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/payments/invoice">
                        Invoice
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/payments">
                        Pay Tution
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/cards">
                        Buy Gift Cards
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/manage-bills">
                        Book a Hotel 
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/ecommerce">
                        Book a Flight
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default SubTransNav;