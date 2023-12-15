import EmailVerify from "../../../components/email-verify/email-verify";
import "./onboard-pagethree.css"

const OnboardPageThree = () => {
    return ( 
        <div className="flex">
        <div className="w-2/4">
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <div className="w-2/3 mb-5">
                    <h2>Tell us more about your business</h2>
                </div>
                <form className="w-2/3">
                    <div>
                        <label htmlFor="country">Where is your business located?<span className="text-red-600">*</span></label>
                        <select id="country">
                            <option value="" key="">Select a Country</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="businessname">What is your business name?<span className="text-red-600">*</span></label>
                        <input
                         type="text"
                         placeholder="Enter Business name"
                         id="businessname" />
                        <p>Use your registered business name from your documents</p>
                    </div>
                    <div>
                        <div>
                            <label htmlFor="industry">Where is your business located?<span className="text-red-600">*</span></label>
                            <select id="industry">
                                <option value="" key="">Select an Option</option>
                            </select>
                        </div>
                        <div className="flex">
                            <div className="mr-10">
                                <label>Company Size<span className="text-red-600">*</span></label>
                                <input 
                                 type="number"
                                 placeholder="0" />
                            </div>
                            <div>
                                <label>Estimated annual volume<span className="text-red-600">*</span></label>
                                <select>
                                    <option value="" key="">Select an Option</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <button>Create Business</button>
                </form>
            </div>
        </div>
        <div className='w-2/4 bg-zinc-50'>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <EmailVerify/>
            </div>
        </div>
    </div>
     );
}
 
export default OnboardPageThree;