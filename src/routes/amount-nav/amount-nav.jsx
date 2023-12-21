import { Link } from "react-router-dom";

const AmountNav = () => {
    return ( 
        <div className="flex">
           <Link className="text-center border-b-2 px-10 py-2">
            Same Currency
           </Link>
           <Link className="text-center border-b-2 px-10 py-2">
             International
           </Link>
        </div>
     );
}
 
export default AmountNav;