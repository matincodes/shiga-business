import "./onboard-pagethree.css";
import {ReactComponent as Shiga} from "../../../assets/shiga-logo.svg";
import DashboardImage from "../../../assets/Dashboard.png";
import Footer from "../../../components/footer/footer";
import ConfirmUrl from "../../../components/confirm-url/confirm-url";
import OnboardSidebar from "../../../components/onboard-sidebar/onboard-sidebar";

const OnboardPageThree = () => {
    return ( 
        <div className="flex flex-col h-screen w-screen">
            <ConfirmUrl/>
            <div className='w-screen flex h-full'>
                <OnboardSidebar/>
                <div className="flex flex-col justify-center items-center w-7/12 flex-1 h-full">
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <div className="w-2/5 mb-3">
                            <h2>Provide some information about your business</h2>
                        </div>
                        <form className="w-2/5">
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
                                <p className="flex justify-end items-center text-[#99999C] text-xs">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.75736 1.75736C2.88258 0.632141 4.4087 0 6 0C7.5913 0 9.11742 0.632141 10.2426 1.75736C11.3679 2.88258 12 4.4087 12 6C12 6.78793 11.8448 7.56815 11.5433 8.2961C11.2417 9.02405 10.7998 9.68549 10.2426 10.2426C9.68549 10.7998 9.02405 11.2417 8.2961 11.5433C7.56815 11.8448 6.78793 12 6 12C5.21207 12 4.43185 11.8448 3.7039 11.5433C2.97595 11.2417 2.31451 10.7998 1.75736 10.2426C1.20021 9.68549 0.758251 9.02405 0.456723 8.2961C0.155194 7.56815 0 6.78793 0 6C0 4.4087 0.632141 2.88258 1.75736 1.75736ZM5.14353 7.56722C5.09203 7.77326 5.10053 7.99022 5.16826 8.19151C5.23604 8.39295 5.36018 8.57073 5.52595 8.70376C5.69173 8.83678 5.89217 8.91947 6.10352 8.94201C6.31487 8.96455 6.52825 8.92599 6.71834 8.83092L6.74836 8.81559C7.07607 8.64774 7.20566 8.24601 7.03781 7.91831C6.93216 7.71203 6.73384 7.58425 6.51965 7.55974L6.85659 6.21007C6.90786 6.00399 6.89913 5.78701 6.83119 5.58582C6.76325 5.38462 6.63908 5.20711 6.47338 5.0743C6.30768 4.94149 6.10739 4.85894 5.89623 4.83644C5.68636 4.81407 5.47449 4.85194 5.2854 4.94558L5.26328 4.95637C4.93236 5.1178 4.79495 5.51692 4.95637 5.84783C5.06002 6.06032 5.26168 6.19302 5.48035 6.21805L5.14353 7.56722ZM5.33333 3.77778C5.33333 3.40959 5.63181 3.11111 6 3.11111H6.00474C6.37293 3.11111 6.67141 3.40959 6.67141 3.77778V3.78252C6.67141 4.15071 6.37293 4.44919 6.00474 4.44919H6C5.63181 4.44919 5.33333 4.15071 5.33333 3.78252V3.77778Z" fill="#99999C"/>
                                    </svg>
                                    Use your registered business name from your documents
                                </p>
                            </div>
                            <div>
                                <div>
                                    <label htmlFor="industry">Business Industry<span className="text-red-600">*</span></label>
                                    <select id="industry">
                                        <option value="" key="">Select an Option</option>
                                    </select>
                                </div>
                                <div className="flex">
                                    <div className="mr-5">
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
                    <Footer/>
                </div>
            </div>
        </div>
     );
}
 
export default OnboardPageThree;