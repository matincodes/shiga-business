import "./business-info.css";
import { useNavigate } from "react-router-dom";

const BusinessInfo = () => {
    const naviagate = useNavigate();
    
    const handleButton = () => {

    }

    return ( 
        <div className="flex items-center justify-center flex-col h-2/3 w-full">
            <div className="w-1/3 mb-5">
                <h2>Share some information about your business</h2>
                <p>
                    We use the information we collect about your business to get you live
                </p>
            </div>
            <form className=" w-1/3">
                <div>
                    <label className=" w-full py-2" htmlFor="email">Legal Business Name</label>
                    <div className="flex justify-between items-center w-full border-2 rounded-md py-3 px-4 my-2 h-14 text-zinc-400">
                        <p>Payshiga Technologies</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99983 2.27672C4.75262 2.27672 3.74156 3.28778 3.74156 4.53499V5.99809H8.2581V4.53499C8.2581 3.28778 7.24704 2.27672 5.99983 2.27672ZM9.78482 6.00273V4.53499C9.78482 2.4446 8.09022 0.75 5.99983 0.75C3.90944 0.75 2.21484 2.4446 2.21484 4.53499V6.00273C1.32567 6.06784 0.624512 6.80986 0.624512 7.71565V11.5324C0.624512 12.481 1.39349 13.25 2.34207 13.25H9.65759C10.6062 13.25 11.3751 12.481 11.3751 11.5324V7.71565C11.3751 6.80986 10.674 6.06784 9.78482 6.00273Z" fill="#99999C"/>
                        </svg>
                    </div>
                </div>
                <div>
                    <label className="w-full py-2"  htmlFor="password">Business Website</label>
                    <input
                     type="text" 
                     placeholder="http://www.abc.xyz" 
                     id="password"/>
                </div>
                <div>
                    <div>
                        <label>Business Phone Number<span>*</span></label>
                        <input
                         type="text"
                         placeholder="Phone Number" />
                    </div>
                    <div>
                        <label>Business Email<span>*</span></label>
                        <input
                         type="email"
                         placeholder="Email Address" />
                    </div>
                </div>
                <div>   
                    <label>Official Buisness Address<span>*</span></label>
                    <div className="flex relative">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 absolute top-2/4 -translate-y-1/2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <input 
                         className="search "
                         type="text"
                         placeholder="Search address" />
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