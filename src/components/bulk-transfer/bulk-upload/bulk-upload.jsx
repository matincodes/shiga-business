import Button from "../../button/button";

const BulkUpload = () => {
    return ( 
        <div>
        <div>
            <h2>Who are you send to?</h2>
            <p>Follow the guidelines below</p>
        </div>
        <div>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM6.75 3.375C6.75 3.78921 6.41421 4.125 6 4.125C5.58579 4.125 5.25 3.78921 5.25 3.375C5.25 2.96079 5.58579 2.625 6 2.625C6.41421 2.625 6.75 2.96079 6.75 3.375ZM4.72518 5.47507C4.72518 5.18512 4.96023 4.95007 5.25018 4.95007H6.18768C6.47763 4.95007 6.71268 5.18512 6.71268 5.47507V8.28754H7.3345C7.62445 8.28754 7.8595 8.52259 7.8595 8.81254C7.8595 9.10249 7.62445 9.33754 7.3345 9.33754H5.00925C4.7193 9.33754 4.48425 9.10249 4.48425 8.81254C4.48425 8.52259 4.7193 8.28754 5.00925 8.28754H5.66268V6.00007H5.25018C4.96023 6.00007 4.72518 5.76502 4.72518 5.47507Z" fill="#FF9600"/>
                </svg>
                You can upload .xlsx or .csv file
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM6.75 3.375C6.75 3.78921 6.41421 4.125 6 4.125C5.58579 4.125 5.25 3.78921 5.25 3.375C5.25 2.96079 5.58579 2.625 6 2.625C6.41421 2.625 6.75 2.96079 6.75 3.375ZM4.72518 5.47507C4.72518 5.18512 4.96023 4.95007 5.25018 4.95007H6.18768C6.47763 4.95007 6.71268 5.18512 6.71268 5.47507V8.28754H7.3345C7.62445 8.28754 7.8595 8.52259 7.8595 8.81254C7.8595 9.10249 7.62445 9.33754 7.3345 9.33754H5.00925C4.7193 9.33754 4.48425 9.10249 4.48425 8.81254C4.48425 8.52259 4.7193 8.28754 5.00925 8.28754H5.66268V6.00007H5.25018C4.96023 6.00007 4.72518 5.76502 4.72518 5.47507Z" fill="#FF9600"/>
                </svg>
                Make sure your file has correct column headers such as Bank Account No,Bank Name, Account Name and Amount
            </p>
            <p>
                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 6C0 2.68629 2.68629 0 6 0C9.31371 0 12 2.68629 12 6C12 9.31371 9.31371 12 6 12C2.68629 12 0 9.31371 0 6ZM6.75 3.375C6.75 3.78921 6.41421 4.125 6 4.125C5.58579 4.125 5.25 3.78921 5.25 3.375C5.25 2.96079 5.58579 2.625 6 2.625C6.41421 2.625 6.75 2.96079 6.75 3.375ZM4.72518 5.47507C4.72518 5.18512 4.96023 4.95007 5.25018 4.95007H6.18768C6.47763 4.95007 6.71268 5.18512 6.71268 5.47507V8.28754H7.3345C7.62445 8.28754 7.8595 8.52259 7.8595 8.81254C7.8595 9.10249 7.62445 9.33754 7.3345 9.33754H5.00925C4.7193 9.33754 4.48425 9.10249 4.48425 8.81254C4.48425 8.52259 4.7193 8.28754 5.00925 8.28754H5.66268V6.00007H5.25018C4.96023 6.00007 4.72518 5.76502 4.72518 5.47507Z" fill="#FF9600"/>
                </svg>
                Numbers of row should not exceed 1,000
            </p>
        </div>
        <form>
            <div>
                <label>Pay from<span className="text-red-600">*</span></label>
                <select>
                    <option value="" key="">
                        Select a wallet
                    </option>
                </select>
            </div>
            <div>
                <label >Upload Bulk Sheet <span className="text-red-600">*</span></label>
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
            <div>
                <Button/>
            </div>
        </form>
    </div>
     );
}
 
export default BulkUpload;