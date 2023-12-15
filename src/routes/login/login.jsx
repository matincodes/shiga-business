import { Link } from "react-router-dom";
import { ReactComponent as Shiga } from "../../assets/shiga-logo.svg";

const Login = () => {
    return ( 
        <div className="h-screen">
            <nav className="p-3 h-1/5">
             <Shiga />
            </nav>
            <div className="flex items-center justify-center flex-col h-4/5 w-full">
                <div className="mb-5">
                    <h2>Login to your Business account</h2>
                    <p>
                        Are you new to shiga business? 
                        <Link  className="text-blue-600"> Create an Account</Link>
                    </p>
                </div>
                <form className=" w-1/3">
                    <div>
                        <label className=" w-full py-2" htmlFor="email">Email Address<span className="text-red-600">*</span></label>
                        <input
                         type="email" 
                         placeholder="Email Address" 
                         id="email"/>
                    </div>
                    <div>
                        <label className="w-full py-2"  htmlFor="password">Password<span className="text-red-600">*</span></label>
                        <input
                         type="password" 
                         placeholder="Password" 
                         id="password"/>
                         <p className="text-right text-blue-600">I forgot my Password</p>
                    </div>
                    <button>Log in</button>
                </form>
            </div>
            
        </div>
     );
}
 
export default Login;