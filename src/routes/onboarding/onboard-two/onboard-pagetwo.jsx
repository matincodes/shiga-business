import DashboardImage from "../../../assets/Dashboard.png";
import {ReactComponent as Shiga} from "../../../assets/shiga-logo.svg";
import Bag from "../../../assets/bag.png";
import PersonAvatar from "../../../assets/person-avatar.png";
import ExportBox from "../../../assets/export-box.png";

const OnboardPageTwo = () => {
    return ( 
        <div className="flex flex-col h-screen w-screen font-[ShigaWeb]">
            <div className="flex justify-between items-center h-8 bg-[#625BF6]">
                <div></div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M15 8C15 11.866 11.866 15 8 15M15 8C15 4.13401 11.866 1 8 1M15 8H1M8 15C4.13401 15 1 11.866 1 8M8 15C4.068 11.7153 4.02347 4.33714 8 1M8 15C11.9522 11.6641 12.0146 4.33796 8 1M1 8C1 4.13401 4.13401 1 8 1" stroke="white" stroke-width="1.2"/>
                    </svg>
                    <p className="text-white text-sm px-1">
                        Confirm if this URL is https://business.payshiga.com
                    </p>
                </div>
                <div className="flex justify-end items-center pr-5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                        <path d="M1.75729 1.75736L10.2426 10.2426M1.75729 10.2426L10.2426 1.75736" stroke="white" stroke-width="2" stroke-linecap="round"/>
                    </svg> 
                </div>
            </div>
            <div className='w-screen flex h-full'>
                <div className='w-3/12 h-full bg-zinc-50'>
                    <Shiga className='mx-10 mt-10 mb-5'/>
                    <div className='set-up w-3/4 my-0 mx-auto pb-6'>
                        <h2 className='text-3xl'>Empowering your financial horizon.</h2>
                        <ul>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M1.19995 3.12821L2.98181 4.91007L6.80009 1.0918" stroke="white" stroke-width="1.39998" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Set up your business account in 3 simple steps. 
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M1.19995 3.12821L2.98181 4.91007L6.80009 1.0918" stroke="white" stroke-width="1.39998" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Built for payments, tuition Merchant businesses, tuition agents and food businesses shipping abroad. 
                            </li>
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="6" viewBox="0 0 8 6" fill="none">
                                    <path d="M1.19995 3.12821L2.98181 4.91007L6.80009 1.0918" stroke="white" stroke-width="1.39998" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Integrate with developer-friendly APIs or choose low-code or pre-built solutions. 
                            </li>
                        </ul>
                    </div>
                    <div className=''>
                        <img 
                        src={DashboardImage} 
                        alt=""
                        className='w-[275px] h-[295px] ml-11 overflow-hidden'
                        />
                    </div>
                </div>

                <div className="w-7/12 flex-1 h-full">
                    <div className='w-full h-full flex flex-col justify-center items-center'>
                        <div className="w-2/5 px-4 mb-5">
                            <h2>What kind of account do you want to open today?</h2>
                            <p className="text-xs text-[#99999C] ">You can always add another account later on.</p>
                        </div>
                        <div className="flex justify-center items-center bg-zinc-50 border border-[#E2E3E5] rounded-lg p-3 mb-2">
                            <img
                             className="mr-2"
                             src={Bag}
                             alt="" />
                            <div>
                                <h3 className="text-base font-medium">Merchant Account</h3>
                                <p className="text-[#99999C] text-xs w-64">I want to pay suppliers and receive payment from buyers across the globe. </p> 
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-zinc-50 border border-[#E2E3E5] rounded-lg p-3 mb-2">
                            <img
                             className="mr-2"
                             src={PersonAvatar} 
                             alt="" />
                            <div>
                                <h3 className="text-base font-medium">Agent Account</h3>
                                <p className="text-[#99999C] text-xs w-64">I want to help clients with global flights, hotels, tuition payments & accommodation. </p> 
                            </div>
                        </div>
                        <div className="flex justify-center items-center bg-zinc-50 border border-[#E2E3E5] rounded-lg p-3 mb-2">
                            <img
                             className="mr-2"
                             src={ExportBox} 
                             alt="" />
                            <div>
                                <h3 className="text-base font-medium">Ecommerce</h3>
                                <p className="text-[#99999C] text-xs w-64">I want to export finished goods from Africa to a global audience using Ojah by Shiga. </p> 
                            </div>
                        </div>
                        <div className="flex w-2/5 px-4 justify-between">
                            <button className="bg-white border px-5 text-black mr-5 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M1.27625 6L5.94778 1M1.27625 6L5.94778 11M1.27625 6H11.7238" stroke="#99999C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="px-2">Back</span>
                            </button>
                            <button className="px-10">
                                Continue
                            </button>
                        </div>
                        <footer className="flex flex-col items-center text-sm pt-10">
                            <p>Terms of Service・Privacy Policy</p>
                            <p className="text-[#99999C]">© 2024 Payshiga Technologies.</p>
                        </footer>
                    </div>
                </div>

            </div>
        
        </div>
     );
}
 
export default OnboardPageTwo;