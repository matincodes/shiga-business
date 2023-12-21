import PaymentImage from '../../../assets/payment-link-2.png';
import { useNavigate } from 'react-router-dom';

const PaymentLink = () => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate("/dashboard/payment/create-link")
    }
    return ( 
        <div className="flex flex-col w-4/5 ">
            <div className="flex justify-between items-center ml-14 mt-4">
                <h3 className="font-bold text-3xl">Payment Link</h3>
                <button  className="w-fit px-3">Make a Transfer</button>
            </div>
            <div  className="flex flex-col justify-center items-center mt-16">
                <img src={PaymentImage} alt="" />
                <h3>No Payment Link</h3>
                <p>You have no payment link yet. Why not create one</p>
                <button onClick={handleButton}  className="bg-zinc-100 text-neutral-900 w-fit px-3">Create a Link</button>
            </div>            
        </div>
     );
}
 
export default PaymentLink;