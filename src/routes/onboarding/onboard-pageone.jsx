import React from 'react'
import { Link } from 'react-router-dom'
import EmailVerify from '../../components/email-verify/email-verify'

function OnboardPageOne() {
  return (
    <div className='flex flex-row'>
        <div className='w-2/4'>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <div className='w-2/3'>
                    <h2>Create a Shiga account for your Business</h2>
                    <p>if you already have an account? <Link>Login</Link></p>
                </div>
                <form className='w-2/3'>
                    <div>
                        <p>Full Name<span className='text-red-600'>*</span></p>
                        <div className='flex justify-between'>
                            <input
                             className='mr-3'
                             type="text"
                             placeholder='First Name' />
                            <input
                             type="text"
                             placeholder='Last Name' />
                        </div>
                    </div>
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
                            <div className='flex flex-row justify-between'>  
                                <div>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                                <p>Password Strength</p>
                            </div>
                        </div>
                        <div className='flex justify-between'>
                        <input 
                        className='w-5 py-4' 
                        type="checkbox" />
                        <label>I acknowledge and agree to Payshiga's Merchant Services Agreement (MSA), Terms and Conditions, and Privacy Notice.</label>
                        </div>
                        <button>Continue</button>
                </form>
            </div>
        </div>
        <div className='w-2/4 bg-zinc-50'>
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <EmailVerify />
            </div>
        </div>
    </div>
  )
}

export default OnboardPageOne