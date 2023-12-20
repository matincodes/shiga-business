import InfoNav from "../../../routes/info-nav/info-nav";
import SmallShigaLogo from "../../../assets/small-shiga-logo.png";
import Close from "../../../assets/close.png";

const Business = () => {

    return ( 
        <div className="flex flex-col w-screen h-screen">
            <div className="w-full h-16 flex justify-between items-center border-b px-3">
                <div className="flex items-center">
                    <img src={SmallShigaLogo} alt="Shiga Logo" className="w-9 h-5 px-2 border-r-2 "/>
                    <p className="text-normal font-[ShigaWeb] text-[#99999C] px-2">Business Verification</p>
                </div>  
                <div>
                    <img src={Close} alt="Close" />
                </div>
            </div>
            <InfoNav/>
        </div>
     );
}
 
export default Business;