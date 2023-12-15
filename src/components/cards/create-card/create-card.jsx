import Umbrella from '../../../assets/umbrella.svg';
import { useNavigate } from 'react-router-dom';

const CreateCard = () => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate("/dashboard/cards/create-card")
    }
    return ( 
        <div className="flex flex-col w-full">
            <div className="flex justify-between items-center mx-14 mt-4">
                <h3 className="font-bold text-3xl">Cards</h3>
                <button  className="w-fit px-3">Get a New Card</button>
            </div>
            <div  className="flex flex-col justify-center items-center mt-16">
                <img src={Umbrella} alt="" />
                <h3>No Cards Yet</h3>
                <p>You have not created any card from this account yet.</p>
                <button onClick={handleButton}  className="bg-zinc-100 text-neutral-900 w-fit px-3">Create a Card</button>
            </div>            
        </div>
     );
}
 
export default CreateCard;