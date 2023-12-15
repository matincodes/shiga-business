import Button from "../../button/button";

const AddProduct = () => {
    return ( 
        <div className="w-full flex flex-col mx-24 mt-1"> 
            <div>
                <h2 className="font-bold text-3xl">Add a Product</h2>
            </div>
            <form className="w-full flex justify-between mt-2 gap-10">
                <div className="w-3/5">
                    <div>
                        <label className="py-1">Name of Product<span className="text-red-600">*</span></label>
                        <select>
                            <option value="" key="">
                                Choose an option 
                            </option>
                        </select>
                    </div>
                    <div>
                        <label className="py-1">Price<span className="text-red-600">*</span></label>
                        <input
                         type="text"
                         placeholder="0.00" />
                    </div>
                    <div>
                        <label className="py-1">Product description <span className="text-red-600">*</span></label>
                        <textarea cols="20" rows="4"
                        placeholder="This is optional"></textarea>
                    </div>
                    <div className="flex justify-between">
                        <div>
                            <label>Weight<span className="text-red-600">*</span></label>
                            <input
                             type="number" 
                             placeholder="0.00"/>
                        </div>
                        <div>
                            <label>Quality<span className="text-red-600">*</span></label>
                            <input
                             type="number" 
                             placeholder="0.00"/>
                        </div>
                    </div>
                    <Button/>
                </div>
                <div className="w-2/5">
                    <label>Add high quality photos <span className="text-red-600">*</span></label>
                    <div className="flex justify-center items-center text-center h-2/5 w-full py-10 px-3 border-2 bg-zinc-50 text-zinc-400  border-dashed rounded-sm">
                        <label className="flex justify-center">
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
 
export default AddProduct;