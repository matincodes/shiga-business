import Button from "../../button/button";

const PaymentDetails = () => {
    return ( 
            <div className="w-full flex flex-col mx-16 mt-5"> 
                <div>
                    <h2 className="font-bold text-3xl">Add Payment Details</h2>
                </div>
                <form className="w-full flex justify-between mt-5 gap-10">
                    <div className="w-3/5">
                        <div>
                            <label>Name of Payment Link<span>*</span></label>
                            <select>
                                <option value="" key="">
                                    Choose an option 
                                </option>
                            </select>
                        </div>
                        <div>
                            <label>Add a description</label>
                            <textarea cols="20" rows="2"
                            placeholder="This is optional"></textarea>
                            <div>
                                <input type="checkbox" />
                                <label>I want this payment link to have a fixed amount</label>
                            </div>
                        </div>
                        <div>
                            <label>Name of Payment Link</label>
                            <select>
                                <option value="" key="">
                                    Choose an option 
                                </option>
                            </select>
                        </div>
                        <div>
                            <label className="w-full py-10">Advanced Customer Options:</label>
                            <div className="flex justify-between mr-20">
                                <div>
                                    <input type="checkbox" />
                                    <label>Collect Full Name</label>
                                </div>
                                <div>
                                    <input type="checkbox" />
                                    <label>Collect Phone number</label>
                                </div>
                                
                            </div>
                        </div>
                        <div>
                            <label>Custom URL</label>
                            <div className="w-full h-14 flex justify-center items-center border-2 rounded-md my-2 ">
                                <span className="flex items-center border-r-2 h-full px-2 bg-zinc-100 text-zinc-400">https://</span>
                                <input 
                                type="text"
                                placeholder="e.g abcd.xyz"
                                className="border-none my-0 py-0 flex-1"/>
                            </div>
                        </div>
                        <Button/>
                    </div>
                    <div className="w-2/5">
                        <label>Add high quality photos <span className="text-red-600">*</span></label>
                        <div className="flex justify-center items-center text-center h-3/5 w-full py-10 px-3 border-2 bg-zinc-50 text-zinc-400  border-dashed rounded-sm">
                            <label className="">
                                <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 60 60" fill="none">
                                    <path d="M30 55.5554V4.44434M55.5556 29.9971H4.44446" stroke="#99999C" stroke-width="8" stroke-linecap="round"/>
                                </svg>
                                <input 
                                type="file" 
                                className="hidden"/>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
     );
}
 
export default PaymentDetails;