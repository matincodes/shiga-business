import MTNProvider from "../../../assets/MTNProvider.png";
import { useNavigate } from "react-router-dom";
import NigeriaFlag from "../../../assets/nigerian-flag.png"
const MobileData = () => {
    const navigate = useNavigate();
    return ( 
        <div className="will mx-10 mt-5">
            <div>
                <h3 className="text-3xl font-bold">Buy Airtime</h3>
            </div>
            <div className="mt-5">
                <p className="text-sm pl-2">Select a Network Provider</p>
                <div className="flex">
                    <img src={MTNProvider} alt="" />
                    <img src={MTNProvider} alt="" />
                    <img src={MTNProvider} alt="" />
                    <img src={MTNProvider} alt="" />
                </div>
                <form>
                    <div>
                        <label>Mobile Number<span className="text-red-600">*</span></label>
                        <div className="flex items-center border pl-2 pr-16 h-12 rounded-lg">
                            <div className="select-container mr-2">
                                <select
                                className="border-none outline-none"
                                >
                                <option value="NG">
                                    <img
                                    src={NigeriaFlag}
                                    alt="Nigerian Flag"
                                    className="mr-2 w-4 h-3"
                                    />
                                    +234
                                </option>
                                </select>
                            </div>
                            <div className="">
                                <input
                                type="tel"
                                placeholder="Enter phone number"
                                className="border-none outline-none"
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        <label>Mobile Number<span className="text-red-600">*</span></label>
                        <select>
                            <option value="" key="">Select a Data Plan</option>
                        </select>
                    </div>
                    <div>
                        <div className="flex items-center pt-1">
                            <label className="py-1">Amount</label>
                            <p className="flex text-xs w-full"> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.44232 0.695312C1.57388 0.695312 0.869873 1.39932 0.869873 2.26776V9.73689C0.869873 10.6053 1.57388 11.3093 2.44232 11.3093H11.5625C12.431 11.3093 13.135 10.6053 13.135 9.73689V4.94092C13.135 4.07248 12.431 3.36847 11.5625 3.36847H2.95337C2.58428 3.36847 2.28508 3.06927 2.28508 2.70018C2.28508 2.3311 2.58428 2.03189 2.95337 2.03189H10.8942C11.2633 2.03189 11.5625 1.73269 11.5625 1.3636C11.5625 0.994516 11.2633 0.695312 10.8942 0.695312H2.44232ZM10.6191 8.08582C11.1401 8.08582 11.5625 7.66341 11.5625 7.14235C11.5625 6.62129 11.1401 6.19888 10.6191 6.19888C10.098 6.19888 9.67558 6.62129 9.67558 7.14235C9.67558 7.66341 10.098 8.08582 10.6191 8.08582Z" fill="#D9D9D9"/>
                                </svg>
                                You have <span>839.90 NGN</span> available
                            </p>
                        </div>
                        <input 
                         type="text"
                         placeholder="NGN 0.00" />
                    </div>
                    <div className="">
                        <button onClick={() => {
                            navigate("/dashboard/manage-bills/airtime-review")
                        }}>Continue</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default MobileData;