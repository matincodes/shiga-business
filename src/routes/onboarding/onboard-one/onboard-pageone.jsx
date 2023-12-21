import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Shiga} from "../../../assets/shiga-logo.svg";
import DashboardImage from "../../../assets/Dashboard.png";
import "./onboard-pageone.css"

function OnboardPageOne() {
  return (
    <div className='flex flex-col h-screen w-screen'>
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
            <div className='w-7/12 flex-1 h-full'>
                <div className='w-full h-full flex flex-col justify-between items-center'>
                    <div className='w-full flex flex-col items-center mt-10'>
                        <div className='w-2/5 pl-6 pb-4'>
                            <h2>Open a Business Account</h2>
                            <p className='text-xs'>if you already have an account? <Link className='text-[#625BF6]'>Login</Link></p>
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
                            <button>Continue</button>
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