import React from 'react'
import { Link } from 'react-router-dom'
import "./onboard-pageone.css"
import OnboardSidebar from '../../../components/onboard-sidebar/onboard-sidebar';
import ConfirmUrl from '../../../components/confirm-url/confirm-url';
import { useNavigate } from 'react-router-dom';

function OnboardPageOne() {
    const navigate = useNavigate();

    const nextPage = () => {
        navigate("/onboarding-two")
    }
  return (
    <div className='flex flex-col h-screen w-screen'>
            <ConfirmUrl/>
        <div className='w-screen flex h-full'>
            <OnboardSidebar/>       
            <div className='w-7/12 flex-1 h-full'>
                <div className='w-full h-full flex flex-col justify-between items-center'>
                    <div className='w-full flex flex-col items-center mt-10'>
                        <div className='w-2/5 pl-6 pb-4'>
                            <h2>Open a Business Account</h2>
                            <p className='text-xs'>if you already have an account? <Link to="/" className='text-[#625BF6]'>Login</Link></p>
                        </div>
                        <form className='w-2/5 pl-6'>
                            <div>
                                <p className='text-xs'>Full Name<span className='text-red-600'>*</span></p>
                                <div className='flex justify-between'>
                                    <input
                                    className='mr-2'
                                    type="text"
                                    placeholder='First Name' />
                                    <input
                                    type="text"
                                    placeholder='Last Name' />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="email">Email Address<span className="text-red-600">*</span></label>
                                <input 
                                type="email" 
                                placeholder="Email Address" 
                                id="email"/>
                            </div>
                            <div>
                                <label  htmlFor="password">Password<span className="text-red-600">*</span></label>
                                <input 
                                type="password" 
                                placeholder="Password" 
                                id="password"/>
                                <div className='flex flex-row justify-between'>  
                                    <div>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                    <p className='text-sm text-[#CCCCCC]'>Password Strength</p>
                                </div>
                            </div>
                            <div className='flex justify-between'>
                                <input 
                                className='w-7 h-10 py-4 border rounded-md border-[#E2E3E5]' 
                                type="checkbox" />
                                <label className='pl-1 text-xs text-[#99999C]'>I acknowledge and agree to <span className="font-medium text-[#343433)]"> Payshiga's Merchant Services Agreement (MSA), Terms and Conditions, and Privacy Notice </span>.</label>
                            </div>
                            <button onClick={() => nextPage()}>Continue</button>
                        </form>
                    </div>
                    <footer className="flex flex-col items-center text-sm pb-10">
                        <p>Terms of Service・Privacy Policy</p>
                        <p className="text-[#99999C]">© 2024 Payshiga Technologies.</p>
                     </footer>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OnboardPageOne