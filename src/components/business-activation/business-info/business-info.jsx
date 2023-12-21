import "./business-info.css";
import { useNavigate } from "react-router-dom";

const BusinessInfo = () => {
    const naviagate = useNavigate();
    
    const handleButton = () => {

    }

    return ( 
        <div className="flex items-center justify-center flex-col h-full w-full">
            <div className="w-2/4 ml-20 mb-3">
                <h2>Share more  details about Payshiga Technlogies</h2>
                <p className="text-xs text-[#99999C]">
                    This information would be used to validate your business.
                </p>
            </div>
            <form className=" w-2/5">
                <div>
                    <label htmlFor="email">Business Website<span className="text-red-600">*</span></label>
                    <div className="flex justify-between items-center w-full border-2 rounded-md h-10">
                        <p className="flex items-center px-1 bg-zinc-50 border-r-2 h-full text-[#99999C]">http://</p>
                        <input
                         className="border-none"
                         placeholder="e.g abc.xyz"
                         type="text"
                         alt="" />
                    </div>
                </div>
                <div className="flex">
                    <div className="mr-2">
                        <label htmlFor="business_phone_number">Business Phone Number<span className="text-red-600">*</span></label>
                        <input
                        type="tel" 
                        placeholder="Phone Number" 
                        id="business_phone_number"/>
                    </div>
                    <div>
                        <label htmlFor="business_support_email">Support Email<span className="text-red-600">*</span></label>
                        <input
                        type="email" 
                        placeholder="Email Address" 
                        id="business_support_email"/>
                    </div>
                </div>
                <div>
                    <label>Tax Identification Number(TIN)<span className="text-red-600">*</span></label>
                    <input
                     type="text"
                     placeholder="Enter TIN" />
                </div>
                <div>   
                    <label>Official Buisness Address<span>*</span></label>
                    <div className="flex items-center h-12 border-2 rounded-md">
                        <div className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M14.3219 15.5189C14.7907 15.9874 15.5505 15.9871 16.0189 15.5183C16.4874 15.0495 16.4871 14.2897 16.0183 13.8212L14.3219 15.5189ZM12.137 7.08504C12.137 9.60097 10.0981 11.64 7.58356 11.64V14.04C11.4242 14.04 14.537 10.9259 14.537 7.08504H12.137ZM7.58356 11.64C5.06903 11.64 3.03008 9.60097 3.03008 7.08504H0.630078C0.630078 10.9259 3.74297 14.04 7.58356 14.04V11.64ZM3.03008 7.08504C3.03008 4.56911 5.06903 2.53008 7.58356 2.53008V0.130078C3.74297 0.130078 0.630078 3.24421 0.630078 7.08504H3.03008ZM7.58356 2.53008C10.0981 2.53008 12.137 4.56911 12.137 7.08504H14.537C14.537 3.24421 11.4242 0.130078 7.58356 0.130078V2.53008ZM11.0505 12.2501L14.3219 15.5189L16.0183 13.8212L12.7469 10.5524L11.0505 12.2501Z" fill="#99999C"/>
                            </svg>
                        </div>
                        <input 
                         className="search border-none p-0"
                         type="text"
                         placeholder="Search address" />
                    </div>
                    <div>
                        <label>Tell us about your business <span className="text-red-600">*</span></label>
                        <textarea cols="30" rows="2" placeholder="What does your business do?"></textarea>
                    </div>
                    
                </div>
                <div className="w-full flex justify-end">
                    <button onClick={handleButton} className="w-2/4">Continue</button>
                </div>
            </form>
        </div>
     );
}
 
export default BusinessInfo;