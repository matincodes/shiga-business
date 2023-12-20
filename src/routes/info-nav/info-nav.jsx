import BusinessInfo from "../../components/business-activation/business-info/business-info";
import DirectorsInfo from "../../components/business-activation/directors-info/directors-info";
import OwnersInfo from "../../components/business-activation/owners-info/owners-info";
import ReviewAndFinish from "../../components/business-activation/review-and-finish/review-and-finish";
import VerifyBusiness from "../../components/business-activation/verify-business/verify-business";
import "./info-nav.css";
import { useState } from "react";


const InfoNav = () => {

    const formPages = [
        'Business Information',
        'Business Documents',
        'Owner Information',
        'Add Directors',
        'Review & Finish',
      ];

    const [currentPage, setCurrentPage] = useState(0);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const calculateProgress = () => {
    return ((currentPage + 1) / formPages.length) * 100;
  };

  return (
    <div className="flex h-full font=[ShigaWeb]">
      {/* Side Navbar */}
      <div className="w-2/12 border-r border-[#F5F5F5] p-4">
        <div className="flex items-center mb-4 mt-5">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M6.91436 1.95094L7.95127 0.706643C8.46696 0.0878102 9.42125 0.0997883 9.92125 0.731369L10.8671 1.92615C11.1701 2.30882 11.6656 2.48385 12.1417 2.37635L13.7484 2.01356C14.5421 1.83433 15.297 2.43781 15.297 3.25149V4.84006C15.297 5.30694 15.5533 5.73612 15.9644 5.95747L17.2501 6.64976C17.9498 7.02652 18.135 7.94636 17.6357 8.56459L16.4051 10.0882C16.1132 10.4496 16.0421 10.9416 16.2197 11.3709L16.7784 12.721C17.1104 13.5234 16.5566 14.4148 15.6901 14.4725L14.4973 14.552C13.9831 14.5863 13.5407 14.9281 13.3777 15.417L12.8895 16.8816C12.6292 17.6625 11.7059 17.9928 11.0094 17.5543L9.65441 16.7011C9.22745 16.4323 8.6818 16.4419 8.26458 16.7256L7.12388 17.5013C6.44081 17.9658 5.50309 17.6643 5.21872 16.8888L4.66599 15.3813C4.49366 14.9113 4.06117 14.5865 3.56177 14.5521L2.35471 14.4689C1.52149 14.4114 0.969987 13.5786 1.24226 12.789L1.74868 11.3204C1.88773 10.9172 1.8149 10.471 1.55482 10.1329L0.343491 8.5582C-0.133598 7.93799 0.0587758 7.03798 0.747731 6.66701L2.04077 5.97076C2.4648 5.74243 2.72306 5.29378 2.70753 4.81243L2.65927 3.31639C2.63237 2.48252 3.40361 1.84998 4.21609 2.03956L5.65103 2.37438C6.11833 2.48342 6.60716 2.31957 6.91436 1.95094ZM12.9794 6.41357C13.3701 6.81577 13.3608 7.45854 12.9586 7.84925L8.51677 12.1642C8.11869 12.5509 7.48386 12.5463 7.09143 12.1539L5.06086 10.1233C4.66437 9.72681 4.66437 9.08397 5.06086 8.68748C5.45735 8.29099 6.10019 8.29099 6.49669 8.68748L7.81967 10.0105L11.5438 6.39276C11.946 6.00206 12.5887 6.01137 12.9794 6.41357Z" fill="#00CE72"/>
            </svg>
            <p className="ml-3 mr-4 font-medium text-sm">Your Progress</p>
          </div>
          <p className="border p-1 rounded-md text-[#99999C] text-xs">{`${calculateProgress()}%`}</p>
          {/* Arrow Indicator */}
        </div>
        <nav>
          {formPages.map((page, index) => (
            <button key={index} className={`bg-white border-none block p-1 pl-4 text-left my-1 ${
                index === currentPage ? 'text-[#625BF6]': 'text-[#99999C]'
              }`} onClick={() => handlePageChange(index)}>

              {page}
            </button>
          ))}
        </nav>
      </div>

      {/* Form Content */}
        <div className="w-8/12">
            {currentPage === 0 && <BusinessInfo />}
            {currentPage === 1 && <VerifyBusiness/>}
            {currentPage === 2 && <OwnersInfo />}
            {currentPage === 3 && <DirectorsInfo />}
            {currentPage === 4 && <ReviewAndFinish />}
        </div>
    </div>
  );
};
 
export default InfoNav;