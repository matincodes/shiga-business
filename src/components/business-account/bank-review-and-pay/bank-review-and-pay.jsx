import SendImage from '../../../assets/send.svg'
import Button from '../../button/button';
import Switch from '../../switch/switch';

const BankReviewAndPa = () => {
    return ( 
        <div className='flex flex-col justify-center items-center mt-5'>
            <div className='flex justify-between gap-5 mb-2'>
                <img
                 src={SendImage} 
                 alt=""
                 className='' />
                <div>
                    <h3 className='text-3xl font-bold tracking-wide'>-120,000 NGN</h3>
                    <span className='inline-block'>Nov 01, 2023 ・5:20pm</span>
                </div>
            </div>
            <div className='w-1/3'>
                <div className='flex justify-between py-2 text-xl'>
                    <p className=''>Transaction Type</p>
                    <p className='font-bold'>Bank Transfer</p>
                </div>
                <div className='flex justify-between py-2 text-xl'>
                   <p>Bank Name</p>
                   <p className='font-bold'>Access Bank Plc</p> 
                </div>
                <div className='flex justify-between py-2 text-xl'>
                    <p>Account Number</p>
                    <p className='font-bold'>01234567890</p> 
                </div>
                <div className='flex justify-between py-2 text-xl'>
                    <p>Account Name</p>
                    <p className='font-bold'>JUMAT JESUTOFUNMI OBI</p>
                </div>
                <div className='flex justify-between py-2 text-xl'>
                    <p>Fee</p>
                    <p className='font-bold'>Free 😎</p>
                </div>
            </div>
            <div className='w-1/3 flex justify-between text-xl'>
                <p>Save as a beneficiary </p>
                <Switch/>
            </div>
            <div className='w-1/3'>
                <Button/>
            </div>
            
        </div>
     ); 
}
 
export default BankReviewAndPa;