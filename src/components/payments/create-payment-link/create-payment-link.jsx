import {ReactComponent as Ellipse} from "../../../assets/Ellipse.svg";

const CreatePaymentLink = () => {
    return ( 
        <div className="w-full">
            <div className="flex justify-start items-center mx-14 mt-4 mb-2">
                <h3 className="font-bold text-2xl">Create a Payment Link</h3>
            </div> 
            <div className='w-full flex flex-col justify-center items-center'>
                <div className="w-2/4 mb-1">
                    <p className="text-left">What type of payment link do you want to create?</p>
                </div>
                <div className="flex bg-zinc-50 rounded-lg px-3 py-4 mb-5 w-2/4 items-center">
                    <Ellipse className="mr-3" />
                    <div>
                        <h3 className="text-lg font-bold">To Receive Payment</h3>
                        <p className="text-neutral-500 w-10/12">Create and send a  link to collect payment from an individual or a business .</p> 
                    </div>
                </div>
                <div className="flex bg-zinc-50 rounded-lg px-3 py-4 mb-5 w-2/4 items-center">
                    <Ellipse  className="mr-3" />
                    <div>
                        <h3 className="text-lg font-bold">For Tution Payment</h3>
                        <p className="text-neutral-500 w-10/12">Create and send a link to an individual looking to make payment for tuition</p> 
                    </div>
                </div>
                <div className="w-2/4 flex justify-end">
                    <button className="w-2/4">Continue</button>
                </div>
            </div>
        </div>
     );
}
 
export default CreatePaymentLink;