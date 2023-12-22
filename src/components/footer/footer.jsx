import { Link } from "react-router-dom";

const Footer = () => {

    const terms = "https://payshiga.notion.site/PAYSHIGA-TERMS-OF-USE-c14e881663ec40c7875e61ff0eebc40b?pvs=4";
    const privacy = "https://payshiga.notion.site/PAYSHIGA-PRIVACY-POLICY-6165bd6474ad4297a2227a0f7c061a7b?pvs=4";

    return ( 
        <footer className="flex flex-col items-center text-sm pb-6">
                <p>
                    <Link to={terms}>Terms of Service</Link>・<Link to={privacy}>Privacy Policy</Link> 
                </p>
                <p className="text-[#99999C]">© 2024 Payshiga Technologies.</p>
        </footer>
     );
}
 
export default Footer;