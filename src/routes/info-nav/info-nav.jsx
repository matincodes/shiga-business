 import { Fragment } from "react";
import { ReactComponent as ShigaLogo} from "../../assets/shiga-logo.svg"
import { Link } from "react-router-dom";
import "./info-nav.css";
const InfoNav = () => {
    return ( 
        <Fragment>
            <div className="flex justify-between py-5 px-7">
                <div>
                    <ShigaLogo />
                </div>
                <div className=" flex justify-center items-center
                ">
                    <Link to='/business-info' className="link">
                        Business Info
                    </Link>
                    <Link  to='/verify-business' className="link">
                        Verify Business
                    </Link>
                    <Link to='/owners-info' className="link">
                        Owner's Info
                    </Link>
                    <Link to='/directors-info' className="link">
                        Director's Info
                    </Link>
                    <Link to='/review' className="link">
                        Review & Finish
                    </Link>
                </div>
                <div>
                
                </div>
            </div>
        </Fragment>
     );
}
 
export default InfoNav;