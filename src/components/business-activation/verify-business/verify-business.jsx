import Button from "../../button/button";

const VerifyBusiness = () => {
    return ( 
            <div className="flex items-center justify-center flex-col h-full w-full mb-10">
            <div className="w-2/4 mb-5">
                <h2>Upload documents for your business</h2>
                <p className="text-xs">
                    Please provide us with your business registration documents
                </p>
            </div>
            <form className="w-2/4">
                <div className="mb-2">
                    <div className="flex justify-between items-center">
                        <label className="w-fit">CAC certificate of your buisness<span className="text-red-600">*</span></label>
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
                    
                    <div className="text-center py-5 px-3 border border-[#E2E3E5] bg-zinc-50 text-zinc-400  border-dashed rounded-md">
                        <label className="flex flex-col">
                            <span className="font-bold">Drag & Drop or click here to upload</span>
                            <span>Upload only .pdf or .csv files</span>
                            <input
                            type="file" 
                            className="hidden " 
                            id="business-cert"/>
                        </label>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <label className="w-fit">Memorandum of incorporation<span className="text-red-600">*</span></label>
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
                    
                        <div className="text-center py-4 px-3 border border-[#E2E3E5] bg-zinc-50 text-zinc-400  border-dashed rounded-sm">
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


                <div>
                    <div className="flex justify-between items-center">
                        <label className="w-fit">SCUML Document<span className="text-red-600">*</span></label>
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
                
                    <div className="text-center py-4 px-3 border border-[#E2E3E5] bg-zinc-50 text-zinc-400  border-dashed rounded-sm">
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
                <Button />  
            </form>
        </div>
     );
}
 
export default VerifyBusiness;