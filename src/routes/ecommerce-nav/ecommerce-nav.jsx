import { Link } from "react-router-dom";

const EcommerceNav = () => {
    return ( 
        <div className="flex h-full">
            <ul className="flex flex-col pl-7 pr-10 border-r w-48">
                <li className="py-2">
                    <Link to="/dashboard/ecommerce/products">
                        Products
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/ecommerce/orders">
                        Orders
                    </Link>
                </li>
                <li className="py-2">
                    <Link to="/dashboard/ecommerce/courier">
                        Courier
                    </Link>
                </li>
            </ul>
        </div>
     );
}
 
export default EcommerceNav;