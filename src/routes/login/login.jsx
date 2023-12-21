import { Link } from "react-router-dom";
import { ReactComponent as Shiga } from "../../assets/shiga-logo.svg";

const Login = () => {

    const contactSupport = () => {
        window.location.href = "mailto:business@payshiga.com"
    }
    return ( 
        <div className=" flex flex-col justify-between h-screen font-[ShigaWeb]">
            <header>
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
                <nav className="flex justify-between p-3 h-1/7 border">
                    <Shiga />
                    <p className="flex items-center justify-center text-xs">
                        <span className="px-1 text-[#343433]">Need help?</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                            <path d="M11.4191 2.75085C10.3031 1.58977 8.73423 0.867188 6.99661 0.867188C5.30294 0.867188 3.76961 1.55368 2.65969 2.6636M11.4191 2.75085C12.4786 3.8532 13.1299 5.35079 13.1299 7.00052C13.1299 8.69419 12.4435 10.2275 11.3335 11.3374M11.4191 2.75085L8.78932 5.3806M8.78932 5.3806C8.77318 5.36276 8.75678 5.34515 8.74013 5.32779C8.30041 4.86959 7.68182 4.58436 6.99661 4.58436C6.32941 4.58436 5.72537 4.8548 5.28813 5.29204M8.78932 5.3806C9.1768 5.80915 9.41278 6.37728 9.41278 7.00052C9.41278 7.66773 9.14234 8.27177 8.7051 8.709M5.3767 8.79323C5.80524 9.18071 6.37337 9.41668 6.99661 9.41668C7.66382 9.41668 8.26786 9.14624 8.7051 8.709M5.3767 8.79323C4.8877 8.35109 4.58045 7.71169 4.58045 7.00052C4.58045 6.33332 4.85089 5.72928 5.28813 5.29204M5.3767 8.79323L2.74694 11.423M2.74694 11.423C3.84929 12.4825 5.34689 13.1339 6.99661 13.1339C8.69029 13.1339 10.2236 12.4474 11.3335 11.3374M2.74694 11.423C1.58587 10.307 0.863281 8.73814 0.863281 7.00052C0.863281 5.30685 1.54978 3.77351 2.65969 2.6636M2.65969 2.6636L5.28813 5.29204M8.7051 8.709L11.3335 11.3374" stroke="#99999C" stroke-width="1.6"/>
                        </svg>
                        <span className="font-medium px-1 cursor-pointer" onClick={() => contactSupport()}>Contact Support</span>
                    </p>
                </nav>
            </header>
            
            <div className="flex items-center justify-center flex-col h-3/7 w-full mb-10">
                <div className="mb-5">
                    <h2 className="">Login to your account</h2>
                    <p className="text-xs text-[#99999C]">
                        New to shiga business? 
                        <Link  className="text-blue-600"> Create an Account</Link>
                    </p>
                </div>
                <form className=" w-1/4 pl-10">
                    <div className="pt-1">
                        <label htmlFor="email">Email Address<span className="text-red-600">*</span></label>
                        <input
                         type="email" 
                         placeholder="Email Address" 
                         id="email"/>
                    </div>
                    <div className="pt-1">
                        <label htmlFor="password">Password<span className="text-red-600">*</span></label>
                        <input
                         type="password" 
                         placeholder="Password" 
                         id="password"/>
                         <p className=" flex justify-end items-center text-right text-xs text-[#99999C] pb-1">
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                <path d="M6.05364 6.44141C9.60149 4.80394 5.77469 1.6993 4.47391 4.31586M6.05364 8.67299V8.67857M11.3 6.00078C11.3 3.07367 8.92706 0.700781 5.99995 0.700781C3.07284 0.700781 0.699951 3.07367 0.699951 6.00078C0.699951 8.92789 3.07284 11.3008 5.99995 11.3008C8.92706 11.3008 11.3 8.92789 11.3 6.00078Z" stroke="#99999C" stroke-width="1.4" stroke-linecap="round"/>
                            </svg>
                            I forgot my Password
                         </p>
                    </div>
                    <button className="text-sm">Log in</button>
                </form>
            </div>
            <footer className="flex flex-col items-center text-sm pb-10">
                <p>Terms of Service・Privacy Policy</p>
                <p className="text-[#99999C]">© 2024 Payshiga Technologies.</p>
            </footer>
        </div>
     );
}
 
export default Login;