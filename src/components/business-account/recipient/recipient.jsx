import { useState } from "react";
import Button from "../../button/button";

const Recipient = () => {
    const [bankName, setBankName] = useState('');
    const [accountNumber, setAccountNumber] = useState('');
  
    const handleBankNameChange = (e) => {
      setBankName(e.target.value);
    };
  
    const handleAccountNumberChange = (e) => {
      setAccountNumber(e.target.value);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Logic for form submission
    };

    return ( 
            <div className="flex flex-col justify-center items-center">
                <div className="mb-2">
                     <h2>Who are you send to?</h2>
                </div>
                <form onSubmit={handleSubmit} className="w-1/3">
                    <div>
                        <label className="w-full py-2" htmlFor="bankName">
                            Bank Name
                            <span className="text-red-600">*</span>
                        </label>
                        <select
                            id="bankName"
                            value={bankName}
                            onChange={handleBankNameChange}
                        >
                            <option value="" key="">Select a bank</option>
                        </select>
                    </div>
                    <div>
                        <label className="w-full py-1" htmlFor="accountNumber">
                            Account number
                            <span className="text-red-600">*</span>
                        </label>
                        <input
                            id="accountNumber"
                            type="text"
                            value={accountNumber}
                            onChange={handleAccountNumberChange}
                        />
                    </div>
                    <div>
                        <label className="w-full py-1">
                            Account Number
                            <span className="text-red-600">*</span>
                        </label>
                        <p className="w-full border-2 rounded-md py-3 px-4 my-2 h-14">{accountNumber}</p>
                    </div>
                    <div>
                        <label className="w-full py-1">
                            Add a Note
                        </label>
                        <textarea cols="30" rows="2" placeholder="Sent From Shiga"></textarea>
                    </div>
                    <Button />
                </form>
            </div>
     );
}
 
export default Recipient;