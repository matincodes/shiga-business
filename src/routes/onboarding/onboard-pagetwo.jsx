import {ReactComponent as Ellipse} from "../../assets/Ellipse.svg"

const OnboardPageTwo = () => {
    return ( 
        <div className="flex">
            <div className="w-2/4">
                <div className='w-full h-screen flex flex-col justify-center items-center'>
                    <div className="w-2/3 mb-5">
                        <h2>What kind of account do you want to open today?</h2>
                        <p>You are registering your business as a?</p>
                    </div>
                    <div className="flex bg-zinc-50 rounded-md px-5 py-4 mb-5">
                        <Ellipse className="mr-3" />
                        <div>
                            <h3 className="text-xl font-bold">Merchant Account</h3>
                            <p className="text-neutral-500 w-11/12">Lorem ipsum dolor sit amet consectetur. Viverra </p> 
                        </div>
                    </div>
                    <div className="flex bg-zinc-50 rounded-md px-5 py-4 mb-5">
                        <Ellipse  className="mr-3" />
                        <div>
                            <h3 className="text-xl font-bold">Agent Account</h3>
                            <p className="text-neutral-500 w-11/12">Lorem ipsum dolor sit amet consectetur. Viverra </p> 
                        </div>
                    </div>
                    <div className="flex bg-zinc-50 rounded-md px-5 py-4 mb-5">
                        <Ellipse  className="mr-3" />
                        <div>
                            <h3 className="text-xl font-bold">Ecommerce</h3>
                            <p className="text-neutral-500 w-11/12">Lorem ipsum dolor sit amet consectetur. Viverra </p> 
                        </div>
                    </div>
                    <div className="flex w-2/3 justify-between">
                        <button className="bg-white border px-5 text-black mr-10">
                          Back
                        </button>
                        <button className="px-10">
                            Continue
                        </button>
                    </div>
                </div>
            </div>
            <div className='w-2/4 bg-zinc-50'>
        
            </div>
        </div>
     );
}
 
export default OnboardPageTwo;