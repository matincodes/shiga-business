import NigeriaFlag from "../../../assets/nigerian-flag.png";
import Button from "../../button/button";

const InternationalAmount = () => {
    return ( 
        <div className='flex justify-center'>
            <form className="mt-5 w-2/3 flex flex-col justify-center items center">
                <div className="">
                    <p className="flex items-center justify-end">
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M2.44232 0.695312C1.57388 0.695312 0.869873 1.39932 0.869873 2.26776V9.73689C0.869873 10.6053 1.57388 11.3093 2.44232 11.3093H11.5625C12.431 11.3093 13.135 10.6053 13.135 9.73689V4.94092C13.135 4.07248 12.431 3.36847 11.5625 3.36847H2.95337C2.58428 3.36847 2.28508 3.06927 2.28508 2.70018C2.28508 2.3311 2.58428 2.03189 2.95337 2.03189H10.8942C11.2633 2.03189 11.5625 1.73269 11.5625 1.3636C11.5625 0.994516 11.2633 0.695312 10.8942 0.695312H2.44232ZM10.6191 8.08582C11.1401 8.08582 11.5625 7.66341 11.5625 7.14235C11.5625 6.62129 11.1401 6.19888 10.6191 6.19888C10.098 6.19888 9.67558 6.62129 9.67558 7.14235C9.67558 7.66341 10.098 8.08582 10.6191 8.08582Z" fill="#D9D9D9"/>
                        </svg>
                        You have <span>839.90 NGN</span> available
                    </p>
                    <div className="flex border-2 rounded-md justify-center items-center">
                        <div className="flex flex-col">
                            <span className="text-sm inline-block px-3">You send</span>
                            <input 
                            className="flex items-center justify-center text-3xl h-8 py-2 border-none font-bold text-zinc-300"
                            type="text"
                            placeholder="0.00" />
                        </div>
                        <img src={NigeriaFlag} alt="" />
                        <select className="w-fit h-fit outline-none border-none px-1 mx-2">
                            <option value="" key="">
                                <img src={NigeriaFlag} alt="NGN" />
                                <span>NGN</span>
                            </option>
                        </select>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1 4.00391H7M4 7.00391V1.00391" stroke="#99999C" stroke-width="1.8" stroke-linecap="round"/>
                        </svg>
                        <p><span>£0.00</span> Transfer Free</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="3" viewBox="0 0 8 3" fill="none">
                            <path d="M1 1.25391H7" stroke="#99999C" stroke-width="1.8" stroke-linecap="round"/>
                        </svg>
                        <p><span>£0.00</span> Amount we'll convert</p>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <path d="M1.87864 6.12523L6.12129 1.88259M6.12129 6.12523L1.87864 1.88259" stroke="#99999C" stroke-width="1.8" stroke-linecap="round"/>
                        </svg>
                        <p><span>£0.00</span> Exchange rate</p>
                    </div>
                    <div className="flex border-2 rounded-md justify-center items-center">
                        <div className="flex flex-col">
                            <span className="text-sm inline-block px-3">You send</span>
                            <input 
                            className="flex items-center justify-center text-3xl h-8 py-2 border-none font-bold text-zinc-300"
                            type="text"
                            placeholder="0.00" />
                        </div>
                        <img src={NigeriaFlag} alt="" />
                        <select className="w-fit h-fit outline-none border-none px-1 mx-2">
                            <option value="" key="">
                                <img src={NigeriaFlag} alt="NGN" />
                                <span>USD</span>
                            </option>
                        </select>
                    </div>
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                            <path d="M7.6983 3.95477C7.6983 3.56817 7.3849 3.25477 6.9983 3.25477C6.6117 3.25477 6.2983 3.56817 6.2983 3.95477H7.6983ZM6.9983 6.2161H6.2983C6.2983 6.40175 6.37205 6.5798 6.50333 6.71108L6.9983 6.2161ZM7.91666 8.12441C8.19003 8.39778 8.63324 8.39778 8.90661 8.12441C9.17998 7.85104 9.17998 7.40783 8.90661 7.13446L7.91666 8.12441ZM0.849996 1.90513C0.576629 2.17849 0.576629 2.62171 0.849996 2.89508C1.12336 3.16844 1.56658 3.16844 1.83995 2.89508L0.849996 1.90513ZM3.53595 1.19908C3.80931 0.925709 3.80931 0.482494 3.53595 0.209127C3.26258 -0.0642402 2.81936 -0.0642402 2.546 0.209127L3.53595 1.19908ZM12.1567 2.89508C12.43 3.16844 12.8732 3.16844 13.1466 2.89508C13.42 2.62171 13.42 2.17849 13.1466 1.90513L12.1567 2.89508ZM11.4506 0.209127C11.1772 -0.06424 10.734 -0.06424 10.4607 0.209127C10.1873 0.482494 10.1873 0.925709 10.4607 1.19908L11.4506 0.209127ZM11.3863 6.2161C11.3863 8.63953 9.42173 10.6041 6.9983 10.6041V12.0041C10.1949 12.0041 12.7863 9.41273 12.7863 6.2161H11.3863ZM6.9983 10.6041C4.57488 10.6041 2.6103 8.63953 2.6103 6.2161H1.2103C1.2103 9.41273 3.80168 12.0041 6.9983 12.0041V10.6041ZM2.6103 6.2161C2.6103 3.79268 4.57488 1.8281 6.9983 1.8281V0.428102C3.80168 0.428102 1.2103 3.01948 1.2103 6.2161H2.6103ZM6.9983 1.8281C9.42173 1.8281 11.3863 3.79268 11.3863 6.2161H12.7863C12.7863 3.01948 10.1949 0.428102 6.9983 0.428102V1.8281ZM6.2983 3.95477V6.2161H7.6983V3.95477H6.2983ZM6.50333 6.71108L7.91666 8.12441L8.90661 7.13446L7.49328 5.72113L6.50333 6.71108ZM1.83995 2.89508L3.53595 1.19908L2.546 0.209127L0.849996 1.90513L1.83995 2.89508ZM13.1466 1.90513L11.4506 0.209127L10.4607 1.19908L12.1567 2.89508L13.1466 1.90513Z" fill="#99999C"/>
                        </svg>
                        <p>This recipient will receive this in minutes </p>
                    </div>
                </div>
                <Button/>
            </form>
        </div>
     );
}
 
export default InternationalAmount;