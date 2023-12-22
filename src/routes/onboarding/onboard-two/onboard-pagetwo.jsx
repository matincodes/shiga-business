import Bag from "../../../assets/bag.png";
import PersonAvatar from "../../../assets/person-avatar.png";
import ExportBox from "../../../assets/export-box.png";
import ConfirmUrl from "../../../components/confirm-url/confirm-url";
import OnboardSidebar from "../../../components/onboard-sidebar/onboard-sidebar";
import Footer from "../../../components/footer/footer";
import { useNavigate } from "react-router";

const OnboardPageTwo = () => {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate("/onboarding-three")
    }

    const previousPage = () => {
        navigate("/onboarding-one")
    }
    return ( 
        <div className="flex flex-col h-screen w-screen font-[ShigaWeb]">
            <ConfirmUrl/>
            <div className='w-screen flex h-full'>
                <OnboardSidebar/>
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
                            <button onClick={() => previousPage()} className="bg-white border px-5 text-black mr-5 flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="12" viewBox="0 0 13 12" fill="none">
                                    <path d="M1.27625 6L5.94778 1M1.27625 6L5.94778 11M1.27625 6H11.7238" stroke="#99999C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                <span className="px-2">Back</span>
                            </button>
                            <button onClick={() => nextPage()} className="px-10">
                                Continue
                            </button>
                        </div>
                        <Footer/>
                    </div>
                </div>

            </div>
        
        </div>
     );
}
 
export default OnboardPageTwo;