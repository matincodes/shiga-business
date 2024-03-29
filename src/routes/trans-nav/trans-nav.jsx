import { Link, Outlet } from "react-router-dom";
import Avatar from '../../assets/Avatar.png';
import "./trans-nav.css";
import Switch from "../../components/switch/switch";

const TransNav = () => {
    return ( 
        <div className="flex">
            <div className="transactions font-[ShigaWeb] flex flex-col items-start justify-between h-screen w-fit pr-4 bg-neutral-100 border-r border-gray-200">
                <div>
                    <div className="flex flex-row justify-between items-center py-4 pb-9 pr-2">
                        <img src={Avatar} alt="Avatar"  className="px-3"/>
                        <div>
                            <p className="text-xs">ID: 09387465</p>
                            <h2 className="text-sm font-medium">JD Mobinn Limited</h2>
                        </div>
                    </div>
                    <ul className="flex flex-col pl-9">
                        <li className="py-2">
                            <Link to="/dashboard">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M4 6.27778C4 5.29594 4.79594 4.5 5.77778 4.5H19.0222C20.0041 4.5 20.8 5.29594 20.8 6.27778V14.311C20.8 15.2928 20.0041 16.0887 19.0222 16.0887H5.77778C4.79594 16.0887 4 15.2928 4 14.311V6.27778Z" fill="black" fill-opacity="0.06"/>
                                    <path d="M18 19.8222C16.2397 19.2167 14.3569 18.8888 12.4 18.8888C10.4431 18.8888 8.56027 19.2167 6.8 19.8222M5.77778 16.0887H19.0222C20.0041 16.0887 20.8 15.2928 20.8 14.311V6.27778C20.8 5.29594 20.0041 4.5 19.0222 4.5H5.77778C4.79594 4.5 4 5.29594 4 6.27778V14.311C4 15.2928 4.79594 16.0887 5.77778 16.0887Z" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Dashboard
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to="/dashboard/transactions">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M18.4001 9.99961C18.4001 14.6388 14.6393 18.3996 10.0001 18.3996C5.36091 18.3996 1.6001 14.6388 1.6001 9.99961C1.6001 5.36042 5.36091 1.59961 10.0001 1.59961C14.6393 1.59961 18.4001 5.36042 18.4001 9.99961Z" fill="black" fill-opacity="0.06"/>
                                    <path d="M10.9001 5.67234C10.9001 5.17528 10.4972 4.77234 10.0001 4.77234C9.50304 4.77234 9.1001 5.17528 9.1001 5.67234H10.9001ZM10.0001 9.99961H9.1001C9.1001 10.2478 9.20256 10.4849 9.38327 10.655L10.0001 9.99961ZM11.5469 12.6914C11.9089 13.032 12.4784 13.0148 12.8191 12.6528C13.1598 12.2908 13.1425 11.7213 12.7806 11.3806L11.5469 12.6914ZM17.5001 9.99961C17.5001 14.1417 14.1422 17.4996 10.0001 17.4996V19.2996C15.1363 19.2996 19.3001 15.1359 19.3001 9.99961H17.5001ZM10.0001 17.4996C5.85796 17.4996 2.5001 14.1417 2.5001 9.99961H0.700098C0.700098 15.1359 4.86385 19.2996 10.0001 19.2996V17.4996ZM2.5001 9.99961C2.5001 5.85747 5.85796 2.49961 10.0001 2.49961V0.699609C4.86385 0.699609 0.700098 4.86336 0.700098 9.99961H2.5001ZM10.0001 2.49961C14.1422 2.49961 17.5001 5.85747 17.5001 9.99961H19.3001C19.3001 4.86336 15.1363 0.699609 10.0001 0.699609V2.49961ZM9.1001 5.67234V9.99961H10.9001V5.67234H9.1001ZM9.38327 10.655L11.5469 12.6914L12.7806 11.3806L10.6169 9.34423L9.38327 10.655Z" fill="#343433"/>
                                </svg>
                                Transactions
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to="/dashboard/payments">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M19.125 20.1309C19.6773 20.1309 20.125 19.6831 20.125 19.1309V9.95898C20.125 9.4067 19.6773 8.95898 19.125 8.95898H16.0625H6.41406C5.01178 8.95898 3.875 7.82221 3.875 6.41992V17.084C3.875 18.7667 5.23913 20.1309 6.92188 20.1309H19.125Z" fill="black" fill-opacity="0.06"/>
                                    <path d="M3.875 6.41992V17.084C3.875 18.7667 5.23913 20.1309 6.92188 20.1309H19.125C19.6773 20.1309 20.125 19.6831 20.125 19.1309V9.95898C20.125 9.4067 19.6773 8.95898 19.125 8.95898H16.0625M3.875 6.41992C3.875 7.82221 5.01178 8.95898 6.41406 8.95898H16.0625M3.875 6.41992C3.875 5.01764 5.01178 3.88086 6.41406 3.88086H15.0625C15.6148 3.88086 16.0625 4.32857 16.0625 4.88086V8.95898" stroke="#343433" stroke-width="1.8" stroke-linecap="square" stroke-linejoin="round"/>
                                    <path d="M16.219 15.5859C16.7324 15.5859 17.1487 15.1697 17.1487 14.6562C17.1487 14.1428 16.7324 13.7266 16.219 13.7266C15.7055 13.7266 15.2893 14.1428 15.2893 14.6562C15.2893 15.1697 15.7055 15.5859 16.219 15.5859Z" fill="#343433" stroke="#343433" stroke-width="0.796875"/>
                                </svg>
                                Payments
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to="/dashboard/cards">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                    <path d="M18.4001 3.88281C18.4001 2.77824 17.5047 1.88281 16.4001 1.88281H3.6001C2.49553 1.88281 1.6001 2.77824 1.6001 3.88281V14.1161C1.6001 15.2207 2.49553 16.1161 3.6001 16.1161H16.4001C17.5047 16.1161 18.4001 15.2207 18.4001 14.1161V3.88281Z" fill="black" fill-opacity="0.06"/>
                                    <path d="M5.1001 6.07644H10.8168M3.6001 1.88281C2.49553 1.88281 1.6001 2.77824 1.6001 3.88281V14.1161C1.6001 15.2207 2.49553 16.1161 3.6001 16.1161H16.4001C17.5047 16.1161 18.4001 15.2207 18.4001 14.1161V3.88281C18.4001 2.77824 17.5047 1.88281 16.4001 1.88281H3.6001Z" stroke="#343433" stroke-width="1.8" stroke-linecap="round"/>
                                </svg>
                                Cards
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to="/dashboard/manage-bills/airtime">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M11.2921 8.35352H4.83057" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.2921 12.3535H7.83057" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.4616 1.59961H4.18471C3.49923 1.59961 2.84182 1.87192 2.35712 2.35663C1.8724 2.84134 1.6001 3.49875 1.6001 4.18422V18.3996L4.83087 16.4611L8.06164 18.3996L11.2924 16.4611L14.5232 18.3996V8.06115V3.53807C14.5232 3.02397 14.7274 2.5309 15.0909 2.16737C15.4544 1.80384 15.9476 1.59961 16.4616 1.59961Z" fill="black" fill-opacity="0.06"/>
                                    <path d="M16.4616 1.59961H4.18471C3.49923 1.59961 2.84182 1.87192 2.35712 2.35663C1.8724 2.84134 1.6001 3.49875 1.6001 4.18422V18.3996L4.83087 16.4611L8.06164 18.3996L11.2924 16.4611L14.5232 18.3996M16.4616 1.59961C15.9476 1.59961 15.4544 1.80384 15.0909 2.16737C14.7274 2.5309 14.5232 3.02397 14.5232 3.53807M16.4616 1.59961C16.9757 1.59961 17.4689 1.80384 17.8324 2.16737C18.1959 2.5309 18.4001 3.02397 18.4001 3.53807V8.06115H14.5232M14.5232 18.3996V3.53807M14.5232 18.3996V8.06115M14.5232 3.53807V8.06115" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Manage Bills
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to="/dashboard/ecommerce/products">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M11.2921 8.35352H4.83057" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M11.2921 12.3535H7.83057" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M16.4616 1.59961H4.18471C3.49923 1.59961 2.84182 1.87192 2.35712 2.35663C1.8724 2.84134 1.6001 3.49875 1.6001 4.18422V18.3996L4.83087 16.4611L8.06164 18.3996L11.2924 16.4611L14.5232 18.3996V8.06115V3.53807C14.5232 3.02397 14.7274 2.5309 15.0909 2.16737C15.4544 1.80384 15.9476 1.59961 16.4616 1.59961Z" fill="black" fill-opacity="0.06"/>
                                    <path d="M16.4616 1.59961H4.18471C3.49923 1.59961 2.84182 1.87192 2.35712 2.35663C1.8724 2.84134 1.6001 3.49875 1.6001 4.18422V18.3996L4.83087 16.4611L8.06164 18.3996L11.2924 16.4611L14.5232 18.3996M16.4616 1.59961C15.9476 1.59961 15.4544 1.80384 15.0909 2.16737C14.7274 2.5309 14.5232 3.02397 14.5232 3.53807M16.4616 1.59961C16.9757 1.59961 17.4689 1.80384 17.8324 2.16737C18.1959 2.5309 18.4001 3.02397 18.4001 3.53807V8.06115H14.5232M14.5232 18.3996V3.53807M14.5232 18.3996V8.06115M14.5232 3.53807V8.06115" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Ecommerce
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to="/dashboard/settings">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.7685 3.51439C4.29821 3.71034 3.9214 4.0798 3.71622 4.54613L1.66816 9.20081C1.44003 9.71928 1.44454 10.3106 1.68055 10.8255L3.72901 15.2949C3.92697 15.7268 4.27345 16.0733 4.70537 16.2712L9.17473 18.3197C9.68967 18.5557 10.281 18.5602 10.7994 18.3321L15.4541 16.284C15.9204 16.0788 16.2899 15.702 16.4859 15.2317L18.3477 10.7633C18.5473 10.2842 18.5512 9.74607 18.3584 9.26425L16.4962 4.60865C16.2947 4.10481 15.8954 3.70559 15.3916 3.50406L10.736 1.64182C10.2542 1.44909 9.716 1.45293 9.23698 1.65252L4.7685 3.51439ZM9.9843 12.9902C11.6269 12.9902 12.9585 11.6586 12.9585 10.0159C12.9585 8.37333 11.6269 7.04172 9.9843 7.04172C8.34169 7.04172 7.01008 8.37333 7.01008 10.0159C7.01008 11.6586 8.34169 12.9902 9.9843 12.9902Z" fill="black" fill-opacity="0.06" stroke="#343433" stroke-width="1.8"/>
                                </svg>
                                Settings
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="mb-5">
                    <ul className="flex flex-col pl-9">
                        <li className="flex items-center justify-between py-2">
                            <div className="flex items-center text-xs font-normal text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-2">
                                    <path d="M8.63298 5.69605C6.24357 4.99084 3.18767 5.74583 1.60303 8.78514L5.52868 10.9561" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M14.3123 11.3662C15.0175 13.7556 14.25 16.8101 11.2149 18.4003L9.04395 14.4733" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M17.0112 2.37437C17.2076 2.42719 17.3664 2.47816 17.4794 2.51729C17.5185 2.63024 17.5695 2.78895 17.6223 2.98528C17.7378 3.41475 17.8606 4.01825 17.8903 4.71277C17.9496 6.09958 17.6391 7.82046 16.1853 9.2755L16.1852 9.27544L16.1793 9.28163C15.4976 9.98775 14.3821 10.7466 13.0453 11.5562C12.3826 11.9577 11.6766 12.3651 10.9561 12.7799C10.9167 12.8026 10.8771 12.8254 10.8376 12.8481C10.2969 13.1594 9.74931 13.4746 9.21083 13.7923C8.41101 12.6066 7.39051 11.5857 6.20497 10.7853C6.51936 10.2514 6.82516 9.7195 7.12772 9.19321C7.56507 8.43248 7.99566 7.68349 8.43569 6.95723C9.24688 5.61839 10.0088 4.49904 10.715 3.81737L10.7151 3.81742L10.7212 3.81127C12.1755 2.3576 13.8963 2.04704 15.2834 2.10635C15.978 2.13606 16.5816 2.25885 17.0112 2.37437Z" fill="black" fill-opacity="0.06" stroke="#343433"/>
                                    <path d="M5.52808 10.9453L5.56126 10.9646C6.98332 11.8427 8.17888 13.043 9.05135 14.4686C11.8722 12.7802 15.076 11.1444 16.539 9.6289C19.7028 6.46237 17.8678 2.1288 17.8678 2.1288C17.8678 2.1288 13.5329 0.29388 10.3677 3.45764C8.85223 4.9206 7.20398 8.13966 5.52808 10.9467V10.9453Z" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M7.48876 14.8861C7.17903 15.1862 6.35767 15.4711 5.57641 15.6881C5.39688 15.7415 5.20628 15.7453 5.02474 15.6993C4.8432 15.6533 4.67747 15.5591 4.54504 15.4266C4.41261 15.2942 4.31841 15.1285 4.27238 14.9469C4.22634 14.7654 4.2302 14.5748 4.28353 14.3953C4.50062 13.614 4.78547 12.7926 5.08553 12.4829C5.24016 12.3112 5.42812 12.1728 5.63797 12.0761C5.84782 11.9794 6.07516 11.9265 6.30613 11.9205C6.5371 11.9145 6.76688 11.9556 6.98146 12.0413C7.19604 12.1269 7.39094 12.2554 7.55427 12.4188C7.7176 12.5822 7.84595 12.7772 7.9315 12.9918C8.01705 13.2065 8.05801 13.4363 8.05188 13.6672C8.04575 13.8982 7.99266 14.1255 7.89585 14.3353C7.79904 14.5451 7.66053 14.733 7.48876 14.8875V14.8861Z" stroke="#343433" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
                                    <path d="M13.6592 6.33715L14.1487 5.84766" stroke="#343433" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                Go Live
                            </div>
                            <div>
                                <Switch />
                            </div>
                        </li>
                        <li className="py-2">
                            <Link to='/developers'>
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                                    <path d="M12.919 1.2373H14.7821C15.8796 1.2373 16.7694 2.12705 16.7694 3.22461V6.95081L18.1441 8.36853C18.4854 8.7205 18.4854 9.27994 18.1441 9.63192L16.7694 11.0496V14.7758C16.7694 15.8734 15.8796 16.7631 14.7821 16.7631H12.919M7.08124 1.2373H5.21814C4.12058 1.2373 3.23083 2.12705 3.23083 3.22461V6.95081L1.85608 8.36853C1.51477 8.7205 1.51477 9.27994 1.85608 9.63192L3.23083 11.0496V14.7758C3.23083 15.8734 4.12058 16.7631 5.21814 16.7631H7.08124" stroke="#343433" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                                For Developers
                            </Link>
                        </li>
                        <li className="py-2">
                            <Link to="/contact-us" className="text-base font-medium text-gray-70">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                    <path d="M10.0701 18.2532C14.8506 18.2532 18.4468 14.4924 18.4468 9.85322C18.4468 5.21403 14.8506 1.60059 10.0701 1.60059C5.2895 1.60059 1.69332 5.21403 1.69332 9.85322C1.69332 11.4754 2.13301 12.9901 2.90927 14.2743L1.55371 18.4006L6.44014 17.4577C7.52669 17.968 8.75346 18.2532 10.0701 18.2532Z" fill="black" fill-opacity="0.06"/>
                                    <path d="M10.9701 6.46374C10.9701 5.96669 10.5671 5.56374 10.0701 5.56374C9.573 5.56374 9.17006 5.96669 9.17006 6.46374H10.9701ZM9.17006 10.2953C9.17006 10.7924 9.573 11.1953 10.0701 11.1953C10.5671 11.1953 10.9701 10.7924 10.9701 10.2953H9.17006ZM10.9701 13.2427C10.9701 12.7456 10.5671 12.3427 10.0701 12.3427C9.573 12.3427 9.17006 12.7456 9.17006 13.2427H10.9701ZM9.17006 13.3901C9.17006 13.8871 9.573 14.2901 10.0701 14.2901C10.5671 14.2901 10.9701 13.8871 10.9701 13.3901H9.17006ZM2.90927 14.2743L3.76431 14.5552L3.89333 14.1624L3.67948 13.8087L2.90927 14.2743ZM1.55371 18.4006L0.698668 18.1197C0.599095 18.4228 0.667428 18.756 0.878278 18.9954C1.08913 19.2348 1.41098 19.3447 1.72424 19.2843L1.55371 18.4006ZM6.44014 17.4577L6.82273 16.643L6.55742 16.5184L6.26961 16.574L6.44014 17.4577ZM17.5468 9.85322C17.5468 14.0086 14.3404 17.3532 10.0701 17.3532V19.1532C15.3608 19.1532 19.3468 14.9762 19.3468 9.85322H17.5468ZM2.59332 9.85322C2.59332 5.71867 5.77894 2.50059 10.0701 2.50059V0.700586C4.80007 0.700586 0.793323 4.70938 0.793323 9.85322H2.59332ZM10.0701 2.50059C14.3612 2.50059 17.5468 5.71867 17.5468 9.85322H19.3468C19.3468 4.70938 15.34 0.700586 10.0701 0.700586V2.50059ZM9.17006 6.46374V10.2953H10.9701V6.46374H9.17006ZM9.17006 13.2427V13.3901H10.9701V13.2427H9.17006ZM3.67948 13.8087C2.98803 12.6648 2.59332 11.3111 2.59332 9.85322H0.793323C0.793323 11.6397 1.27799 13.3154 2.13906 14.7399L3.67948 13.8087ZM2.05423 13.9934L0.698668 18.1197L2.40875 18.6815L3.76431 14.5552L2.05423 13.9934ZM10.0701 17.3532C8.88501 17.3532 7.78894 17.0968 6.82273 16.643L6.05755 18.2723C7.26444 18.8391 8.6219 19.1532 10.0701 19.1532V17.3532ZM1.72424 19.2843L6.61066 18.3414L6.26961 16.574L1.38319 17.5169L1.72424 19.2843Z" fill="#343433"/>
                                </svg>
                                Contact us
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="w-full h-screen">
                <div className="flex flex-row justify-between items-center h-10 p-7 border-b border-gray-200">
                    <h4 className="font-bold text-xl">Transactions</h4>
                    <div className="flex">
                        <div className="flex justify-center items-center bg-indigo-50 rounded-3xl py-1 px-3 mr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none" className="mx-1">
                                <path d="M12.8742 14.9717C12.8742 16.9203 11.1509 18.5 9.02517 18.5C6.89939 18.5 5.17611 16.9203 5.17611 14.9717M12.8742 14.9717H15.181C16.4767 14.9717 17.2009 13.4768 16.3978 12.46L15.2256 10.976V7.72821C15.2256 4.28847 12.4372 1.5 8.99741 1.5C5.53704 1.5 2.7401 4.32074 2.76942 7.781L2.79502 10.8019L1.58845 12.4112C0.79741 13.4663 1.55026 14.9717 2.86896 14.9717H5.17611M12.8742 14.9717H5.17611" stroke="#5E5CE6" stroke-width="1.8"/>
                            </svg>
                            1
                        </div>
                        <p className="flex justify-center items-center bg-black text-white font-bold text-xl py-1 px-3 rounded-full">D</p>
                    </div>
                </div>
                <Outlet/>
            </div>
        </div>
     );
}
 
export default TransNav;