import SendImage from '../../../assets/send.svg'
import Button from '../../button/button';

const CardReviewAndPay = () => {
    return ( 
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='flex justify-between gap-5 mb-2'>
                <img
                 src={SendImage} 
                 alt=""
                 className='' />
                <div>
                    <h3 className='text-3xl font-bold tracking-wide'>-52,000 NGN</h3>
                    <span className='inline-block'>Nov 01, 2023 ・5:20pm</span>
                </div>
            </div>
            <div className='w-1/3'>
                <div className='flex justify-between py-2 text-xl'>
                    <p className=''>Transaction Type</p>
                    <p className='font-bold'>Virtual Card</p>
                </div>
                <div className='flex justify-between py-2 text-xl'>
                   <p>Card Type</p>
                   <p className='font-bold'>Virtual Card</p> 
                </div>
                <div className='flex justify-between py-2 text-xl'>
                    <p>Card Currency</p>
                    <p className='font-bold'>NGN</p> 
                </div>
                <div className='flex justify-between py-2 text-xl'>
                    <p>Amount to fund card</p>
                    <p className='font-bold'>50,000 NGN</p>
                </div>
                <div className='flex justify-between py-2 text-xl'>
                    <p>Fee</p>
                    <p className='font-bold'>2,000 NGN</p>
                </div>
            </div>
            <Button/>
        </div>
     );
}
 
export default CardReviewAndPay;