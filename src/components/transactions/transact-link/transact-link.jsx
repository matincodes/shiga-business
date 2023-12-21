import TransactHead from "../transact-head/transact-head";
import PaymentImage from "../../../assets/payment-link.png" 
const TransactLink = () => {
    return ( 
        <div className="">
          <TransactHead />
          <div  className="flex flex-col justify-center items-center mt-16">
            <img src={PaymentImage} alt="" />
            <h3>No Payment Link</h3>
            <p>You have no payment link yet. Why not create one</p>
            <button className="bg-zinc-100 text-neutral-900 w-fit px-3">Create a Link</button>
          </div>
        </div>
     );
}
 
export default TransactLink;