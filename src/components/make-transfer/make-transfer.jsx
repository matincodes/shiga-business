import {ReactComponent as Ellipse} from "../../assets/Ellipse.svg";

const MakeTransfer = () => {
    return ( 
        <div>
            <div className="flex justify-between items-center mx-14 mt-4 mb-2">
                <h3 className="font-bold text-2xl">Make a Transfer</h3>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="11" viewBox="0 0 10 11" fill="none">
                    <path d="M1.11081 9.38895L5.00032 5.49944M5.00032 5.49944L8.88898 1.61077M5.00032 5.49944L1.11123 1.61035M5.00032 5.49944L8.8894 9.38853" stroke="#99999C" stroke-width="2" stroke-linecap="round"/>
                </svg>
            </div> 
            <div className='w-full flex flex-col justify-center items-center'>
                    <div className="w-2/4 mb-1">
                        <p className="text-left">How would you like to make your transfer?</p>
                    </div>
                    <div className="flex bg-zinc-50 rounded-lg px-3 py-4 mb-5 w-2/4 items-center">
                        <Ellipse className="mr-3" />
                        <div>
                            <h3 className="text-lg font-bold">Send to a Bank Account</h3>
                            <p className="text-neutral-500 w-10/12">Send money from your Shiga account to any bank account instantly.</p> 
                        </div>
                    </div>
                    <div className="flex bg-zinc-50 rounded-lg px-3 py-4 mb-5 w-2/4 items-center">
                        <Ellipse  className="mr-3" />
                        <div>
                            <h3 className="text-lg font-bold">Send to a Shiga Account</h3>
                            <p className="text-neutral-500 w-10/12">Send money in any currency between Shiga accounts using IDs.</p> 
                        </div>
                    </div>
                    <div className="flex bg-zinc-50 rounded-lg px-3 py-4 mb-5 w-2/4 items-center">
                        <Ellipse  className="mr-3" />
                        <div>
                            <h3 className="text-lg font-bold">Make a Bulk Payment</h3>
                            <p className="text-neutral-500 text-base w-10/12">Send money from your Shiga account to multiple bank accounts at the same time.</p> 
                        </div>
                    </div>
                    <div className="flex w-2/4 justify-between">
                        <button className="bg-white border px-1 text-black mr-14">
                          Back
                        </button>
                        <button className="px-5">
                            Continue
                        </button>
                    </div>
                </div>
        </div>
     );
}
 
export default MakeTransfer;