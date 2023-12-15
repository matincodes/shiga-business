import Button from "../../button/button";

const DirectorsInfo = () => {
    return ( 
        <div className="flex items-center justify-center flex-col h-2/3 w-full">
            <div className="w-1/3 mb-5">
                <h2>Share information about your directors</h2>
            </div>
            <form className=" w-1/3">
                <div>
                    <label className="w-full py-2">First Director's Full Name <span className="text-red-600">*</span></label>
                    <div className="flex">
                        <input 
                         type="text"
                         className="mr-2"
                         placeholder="First Name" />
                        <input
                         type="text"
                         className="ml-2"
                         placeholder="Last Name" />
                    </div>
                </div>
                <div>
                    <label className="w-full py-2">Upload your First director’s ID card.<span className="text-red-600">*</span></label>
                        <div className="text-center mt-2 py-4 px-3 border-2 bg-zinc-50 text-zinc-400  border-dashed rounded-sm">
                            <label>
                                <span className="font-bold">Drag & Drop or click here to upload</span>
                                <span className="inline-block">Upload only .pdf or .jpg files</span>
                                <input
                                type="file" 
                                className="hidden " 
                                id="business-cert"/>
                            </label>
                        </div>
                </div>
                <div className="w-full flex justify-end">
                    <button className="flex justify-center items-center bg-white border-2 text-black w-48">
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                            <path d="M6 10.5V1.5M10.5 5.99951H1.5" stroke="#99999C" stroke-width="1.6" stroke-linecap="round"/>
                        </svg>
                        <span className="pl-2">Add Director</span>   
                    </button>
                </div>
                <Button />
            </form>
        </div>
     );
}
 
export default DirectorsInfo;