import { useState } from "react";

const ConfirmUrl = () => {

    const [close, setClose] = useState(false);

    const handleClose = () => {
        setClose(true)
    }

    return ( 
        <div className={`transition-all duration-500 flex justify-between items-center h-8 bg-[#625BF6] ${close ? "-translate-y-8 hidden": ""}`}>
            <div></div>
            <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M15 8C15 11.866 11.866 15 8 15M15 8C15 4.13401 11.866 1 8 1M15 8H1M8 15C4.13401 15 1 11.866 1 8M8 15C4.068 11.7153 4.02347 4.33714 8 1M8 15C11.9522 11.6641 12.0146 4.33796 8 1M1 8C1 4.13401 4.13401 1 8 1" stroke="white" stroke-width="1.2"/>
                </svg>
                <p className="text-white text-sm px-1">
                    Confirm if this URL is https://business.payshiga.com
                </p>
            </div>
            <div className="flex justify-end items-center pr-5" onClick={handleClose}>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M1.75729 1.75736L10.2426 10.2426M1.75729 10.2426L10.2426 1.75736" stroke="white" stroke-width="2" stroke-linecap="round"/>
                </svg> 
            </div>
        </div>
     );
}
 
export default ConfirmUrl;