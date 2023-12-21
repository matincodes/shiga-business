import Button from "../../button/button";

const OwnersInfo = () => {
    return ( 
        <div className="flex items-center justify-center flex-col h-full w-full">
            <div className="w-2/4 mb-2 ml-20">
                <h2>Let’s get to know you more </h2>
                <p className="text-xs text-[#99999C]">
                    Add the information of the account owner
                </p>
            </div>
            <form className="w-2/5">
                <div>
                    <label>Full Name</label>
                    <div className="flex justify-between">
                        <div className="flex justify-between items-center w-full border-2 rounded-md py-1 px-3 mr-2 h-10 text-zinc-400">
                            <p className="text-xs">Osaretin</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99983 2.27672C4.75262 2.27672 3.74156 3.28778 3.74156 4.53499V5.99809H8.2581V4.53499C8.2581 3.28778 7.24704 2.27672 5.99983 2.27672ZM9.78482 6.00273V4.53499C9.78482 2.4446 8.09022 0.75 5.99983 0.75C3.90944 0.75 2.21484 2.4446 2.21484 4.53499V6.00273C1.32567 6.06784 0.624512 6.80986 0.624512 7.71565V11.5324C0.624512 12.481 1.39349 13.25 2.34207 13.25H9.65759C10.6062 13.25 11.3751 12.481 11.3751 11.5324V7.71565C11.3751 6.80986 10.674 6.06784 9.78482 6.00273Z" fill="#99999C"/>
                            </svg>
                        </div>
                        <div className="flex justify-between items-center w-full border-2 rounded-md py-1 px-3 h-10 text-zinc-400">
                            <p className="text-xs">Ojobabalola</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="14" viewBox="0 0 12 14" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M5.99983 2.27672C4.75262 2.27672 3.74156 3.28778 3.74156 4.53499V5.99809H8.2581V4.53499C8.2581 3.28778 7.24704 2.27672 5.99983 2.27672ZM9.78482 6.00273V4.53499C9.78482 2.4446 8.09022 0.75 5.99983 0.75C3.90944 0.75 2.21484 2.4446 2.21484 4.53499V6.00273C1.32567 6.06784 0.624512 6.80986 0.624512 7.71565V11.5324C0.624512 12.481 1.39349 13.25 2.34207 13.25H9.65759C10.6062 13.25 11.3751 12.481 11.3751 11.5324V7.71565C11.3751 6.80986 10.674 6.06784 9.78482 6.00273Z" fill="#99999C"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <label className="w-fit">Phone Number<span className="text-red-600">*</span></label>
                        <p className="text-xs text-[#625BF6]">Verify Number</p>
                    </div>
                    <input
                     className="my-0 text-xs placeholder:text-xs"
                     type="tel"
                     placeholder="Enter your number" />
                </div>
                <div>
                    <div>
                        <label>Nationality<span className="text-red-600">*</span></label>
                        <select className="my-0 text-xs">
                            <option value="" key="">Select a country</option>
                        </select>
                    </div>
                    <div>
                        <label>Date of Birth<span className="text-red-600">*</span></label>
                        <input
                         className="my-0 text-xs"
                         type="date" 
                        />
                    </div>
                </div>
                <div>   
                    <label>Your Address<span className="text-red-600">*</span></label>
                    <div className="flex items-center h-10 border-2 rounded-md">
                        <div className="px-2">
                            <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                <path d="M14.3219 15.5189C14.7907 15.9874 15.5505 15.9871 16.0189 15.5183C16.4874 15.0495 16.4871 14.2897 16.0183 13.8212L14.3219 15.5189ZM12.137 7.08504C12.137 9.60097 10.0981 11.64 7.58356 11.64V14.04C11.4242 14.04 14.537 10.9259 14.537 7.08504H12.137ZM7.58356 11.64C5.06903 11.64 3.03008 9.60097 3.03008 7.08504H0.630078C0.630078 10.9259 3.74297 14.04 7.58356 14.04V11.64ZM3.03008 7.08504C3.03008 4.56911 5.06903 2.53008 7.58356 2.53008V0.130078C3.74297 0.130078 0.630078 3.24421 0.630078 7.08504H3.03008ZM7.58356 2.53008C10.0981 2.53008 12.137 4.56911 12.137 7.08504H14.537C14.537 3.24421 11.4242 0.130078 7.58356 0.130078V2.53008ZM11.0505 12.2501L14.3219 15.5189L16.0183 13.8212L12.7469 10.5524L11.0505 12.2501Z" fill="#99999C"/>
                            </svg>
                        </div>
                        <input 
                         className="my-0 text-xs search border-none p-0"
                         type="text"
                         placeholder="Search address" />
                    </div>
                </div>
                <div>
                    <label>Means of Identification<span className="text-red-600">*</span></label>
                    <select className="my-0 text-xs">
                        <option value="" key="">Select a Document</option>
                    </select>
                </div>
                <div>
                    <div className="flex justify-between items-center">
                        <label className="w-fit">Upload identification document<span className="text-red-600">*</span></label>
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
                    
                        <div className="text-center py-3 px-3 border border-[#E2E3E5] bg-zinc-50 text-zinc-400  border-dashed rounded-md">
                            <label className="flex flex-col">
                                <span className="font-bold text-xs">Drag & Drop or click here to upload</span>
                                <span className="inline-block text-xs">Upload only .pdf or .jpg files</span>
                                <input
                                type="file" 
                                className="hidden"/>
                            </label>
                        </div>
                </div>
                <Button />
            </form>
        </div>
     );
}
 
export default OwnersInfo;