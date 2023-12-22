import {ReactComponent as Shiga} from "../../assets/shiga-logo.svg";
import DashboardImage  from "../../assets/Dashboard.png";
import Checkers from "../../assets/Checkers.svg"

const OnboardSidebar = () => {
    return ( 
        <div className='w-3/12 h-full bg-zinc-50'>
            <Shiga className='mx-4 mt-10 mb-5'/>
            <div className='set-up w-10/12 my-0 mx-auto pb-6'>
                <h2 className='text-2xl font-medium font-[ShigaWeb]'>Empowering your financial horizon.</h2>
                <ul>
                    <li>
                        <img src={Checkers} alt="" />
                        <span className="px-1">Set up your business account in 3 simple steps.</span> 
                    </li>
                    <li>
                        <img src={Checkers} alt="" />
                        <span className="px-1">Built for payments, tuition Merchant businesses, tuition agents and food businesses shipping abroad.</span> 
                    </li>
                    <li>
                        <img src={Checkers} alt="" />
                        <span className="px-1">Integrate with developer-friendly APIs or choose low-code or pre-built solutions.</span> 
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
     );
}
 
export default OnboardSidebar;