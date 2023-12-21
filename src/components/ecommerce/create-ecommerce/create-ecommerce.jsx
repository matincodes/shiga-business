import EcommerceNav from "../../../routes/ecommerce-nav/ecommerce-nav";
import { useLocation } from "react-router-dom";
import Products from "../products/products";
import AddProduct from "../add-product/add-product";

const CreateEcommerce = () => {
    const location = useLocation();
    return ( 
        <div className="flex">
            <EcommerceNav/>
            {location.pathname === '/dashboard/ecommerce/products' && <Products/>}
            {location.pathname.includes('add-product') && <AddProduct/>}
        </div>
     );
}
 
export default CreateEcommerce;