import Button from "../../button/button";

const DirectorsInfo = () => {
    return ( 
        <div className="flex items-center justify-center flex-col h-full w-full pb-24">
            <div className="w-2/4 px-7 mb-5 ml-6">
                <h2>Share information about your directors</h2>
            </div>
            <form className=" w-2/5">
                <div>
                    <label>First Director's Full Name <span className="text-red-600">*</span></label>
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
                    <div className="flex justify-between items-center">
                        <label className="w-fit">Upload your First director’s ID card.<span className="text-red-600">*</span></label>
                        <p className="flex items-center text-xs text-[#625BF6]">
                            <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
                                <path d="M7.39096 0.914062H1.60914C1.07695 0.914062 0.645508 1.3455 0.645508 1.8777V10.1211C0.645508 10.6534 1.07695 11.0848 1.60914 11.0848H7.39096C7.92316 11.0848 8.3546 10.6534 8.3546 10.1211V1.8777C8.3546 1.3455 7.92316 0.914062 7.39096 0.914062Z" stroke="#625BF6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M7.39096 0.914062H1.60914C1.07695 0.914062 0.645508 1.3455 0.645508 1.8777V10.1211C0.645508 10.6534 1.07695 11.0848 1.60914 11.0848H7.39096C7.92316 11.0848 8.3546 10.6534 8.3546 10.1211V1.8777C8.3546 1.3455 7.92316 0.914062 7.39096 0.914062Z" stroke="white" stroke-opacity="0.65" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.57324 3.32227H6.42779" stroke="#625BF6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.57324 3.32227H6.42779" stroke="white" stroke-opacity="0.65" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.57324 5.73242H6.42779" stroke="#625BF6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.57324 5.73242H6.42779" stroke="white" stroke-opacity="0.65" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.57324 8.14062H4.50051" stroke="#625BF6" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M2.57324 8.14062H4.50051" stroke="white" stroke-opacity="0.65" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span className="px-2">See a Sample File</span>
                        </p>
                    </div>
                    
                        <div className="text-center py-4 px-3 border border-[#E2E3E5] bg-zinc-50 text-zinc-400  border-dashed rounded-md">
                            <label className="flex flex-col">
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
                    <button className="flex justify-center items-center bg-white border-2 text-black w-36">
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