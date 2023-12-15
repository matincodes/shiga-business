import Button from "../../button/button";

const VerifyBusiness = () => {
    return ( 
            <div className="flex items-center justify-center flex-col h-2/3 w-full">
            <div className="w-1/3 mb-5">
                <h2>Upload documents for your business</h2>
                <p>
                    Please provide us with your business registration documents
                </p>
            </div>
            <form className=" w-1/3">
                <div>
                    <label className="w-full py-2">CAC certificate of your buisness<span className="text-red-600">*</span></label>
                    <div className="text-center py-4 px-3 border-2 bg-zinc-50 text-zinc-400  border-dashed rounded-sm">
                        <label>
                            <span className="font-bold">Drag & Drop or click here to upload</span>
                            <span className="inline-block">Upload only .pdf or .csv files</span>
                            <input
                            type="file" 
                            className="hidden " 
                            id="business-cert"/>
                        </label>
                    </div>
                </div>
                <div>
                    <label>Memorandum of incorporation<span className="text-red-600">*</span></label>
                        <div className="text-center py-4 px-3 border-2 bg-zinc-50 text-zinc-400  border-dashed rounded-sm">
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
                <Button />  
            </form>
        </div>
     );
}
 
export default VerifyBusiness;