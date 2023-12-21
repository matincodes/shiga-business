import AmountNav from "../../../routes/amount-nav/amount-nav";
import SameCurrencyAmount from "../same-currency-amount/same-currency-amount";

const Amount = () => {
    return ( 
        <div className="w-full mt-4 flex flex-col justify-center items-center">
            <AmountNav />
            <SameCurrencyAmount/>
        </div>
     );
}
 
export default Amount;