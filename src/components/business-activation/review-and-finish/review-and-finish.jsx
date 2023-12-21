import BusinessInfoImage from "../../../assets/business-info-image.png";
import BusinessDocumentImage from "../../../assets/business-document-image.png";
import OwnerInfoImage from "../../../assets/owner-info-image.png";
import DirectorImage from "../../../assets/director-image.png";
import "./review-and-finish.css";
const ReviewAndFinish = ({onPageChange}) => {
    return ( 
        <div className="flex flex-col justify-items-center items-center h-full w-full">
            <div className="w-2/5 mb-5 ml-6 mt-10">
                <h2>Review & Submit</h2>
                <p className="text-xs text-[#99999C]">Confirm your compliance information and submit.</p>
            </div>
            <div className="review-img grid grid-cols-2 gap-10">
                <img
                 src={BusinessInfoImage}
                 alt=""
                 onClick={() => onPageChange(0)} />
                <img
                 src={BusinessDocumentImage} 
                 alt="" 
                 onClick={() => onPageChange(1)}/>
                <img
                 src={OwnerInfoImage} 
                 alt=""
                 onClick={() => onPageChange(2)} />
                <img
                 src={DirectorImage} 
                 alt=""
                 onClick={() => onPageChange(3)} />
            </div>
            <div className="flex items-center w-2/5 my-4">
                <input
                 className='w-7 h-10 py-4 border rounded-md border-[#E2E3E5]'
                 type="checkbox" />
                <label className='pl-1 text-xs text-[#99999C]'>By submitting this form, you confirm that your information is accurate and you agree to <span className="font-medium text-[#343433]">Payshiga’s Terms of Use</span> </label>
            </div>
            <div className="w-2/5">
                <button>Confirm & Submit</button>
            </div>
        </div>
     );
}
 
export default ReviewAndFinish;