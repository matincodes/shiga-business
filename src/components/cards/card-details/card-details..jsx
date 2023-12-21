import {ReactComponent as PurpleCard} from '../../../assets/purple-card.svg'
import Button from '../../button/button';
const CardDetails = () => {
    return ( 
        <div className='flex flex-col justify-center items-center'>
            <div>
                <h2 className="font-bold text-3xl">Create a Virtual Card</h2>
            </div>
            <div className='flex justify-between gap-10'>
                <div className="flex bg-zinc-50 rounded-lg mb-5  w-full items-center">
                        <PurpleCard className='w-2/4'/>
                        <h3 className="text-lg font-bold">Naira Virtual Card</h3>
                </div>
                <div className="flex bg-zinc-50 rounded-lg mb-5 w-full items-center">
                        <PurpleCard className='w-2/4'/>
                        <h3 className="text-lg font-bold">Naira Virtual Card</h3>
                </div>
            </div>
            <form>
                <div>
                    <label className='w-full py-2'>Assign to Team Member <span className='text-red-600'>*</span></label>
                    <select>
                        <option value="" key="">Select a Team Member</option>
                    </select>
                </div>
                <div>
                    <label className='w-full py-2'>Card Label <span className='text-red-600'>*</span></label>
                    <input type="text" placeholder='e.g Disney subsciption card' />
                </div>
                <div>
                    <label className='w-full py-2'>Amount to fund <span className='text-red-600'>*</span></label>
                    <input type="text" placeholder='NGN 0.00' />
                </div>
                <Button/>
            </form>
        </div>
     );
}
 
export default CardDetails;