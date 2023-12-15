import React from 'react';
import "./email-verify.css"

function EmailVerify() {
  return (
    <div className='bg-white px-9 py-12 rounded-xl'>
        <div className='border-b pb-5 mb-4'>
            <h3 className='text-2xl font-bold pb-1'>Verify Email Address</h3>
            <p>Enter the 6 digit code we sent to <span>abcd@ghi.jkl</span></p>
        </div>
        <form className='ml-4'>
            <p className='my-2'>Enter Code <span className='text-red-600'>*</span></p>
            <div className='otp flex flex-row my-5'>
                <input 
                 type="text"
                 maxLength={1} />
                <input
                 type="text"
                 maxLength={1} />
                <input
                 type="text"
                 maxLength={1} />
                <input
                 type="text"
                 maxLength={1} />
                <input
                 type="text"
                 maxLength={1} />
                <input
                 type="text"
                 maxLength={1} />
            </div>
            <button>Confirm Email</button>
        </form>
    </div>
  )
}

export default EmailVerify