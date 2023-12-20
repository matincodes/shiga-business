import Switch from "../../switch/switch";
import BigGradient from "../../../assets/big-gradient.png";    

const ViewPaymentWithList = () => {
    return ( 
        <div className="flex flex-col gap-12 w-full items-start pt-5 pl-10">
        <div className="flex flex-col gap-6 w-5/6 items-start">
            <div className="border-solid border-b border-[#f5f5f5] flex flex-row justify-between w-full h-20 items-start">
                <div className="text-4xl  font-medium text-[#343433] mt-1">
                    Trip to Manchester United
                </div>
                <div className="flex flex-row gap-10 w-1/4 items-start">
                    <div className="flex flex-col mt-1 gap-1 w-10 items-start">
                        <div className="text-right text-sm text-[#99999c]">
                            Status
                        </div>
                        <div className="">
                            <Switch/>
                        </div>
                    </div>
                    <button className="text-lg font-medium text-[#343433] border-solid border-[#e2e3e5] bg-white flex flex-row justify-center w-1/2 cursor-pointer border rounded-lg">
                        Edit Link
                    </button>
                </div>
            </div>
            <div className="flex flex-row gap-16 w-full items-start">
                <img src={BigGradient} alt=""/>
                <div className="flex flex-col justify-between w-3/5 h-64 items-start">
                    <div className="flex flex-col gap-2 w-16 items-start">
                        <div className="text-sm text-[#99999c]">
                            Description
                        </div>
                        <div className=" font-medium text-[#343433]">
                            Label
                        </div>
                    </div>
                    <div className="flex flex-row justify-between w-5/6 items-start">
                        <div className="flex flex-col gap-2 w-12 items-start">
                            <div className="text-sm text-[#99999c]">
                                Amount
                            </div>
                            <div className=" font-medium text-[#343433]">
                                Label
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 w-1/3 items-start">
                            <div className="text-sm text-[#99999c]">
                                Total Received (Count)
                            </div>
                            <div className="font-medium text-[#343433]">
                                60,000 NGN (4)
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-5/6 items-start">
                        <div className="flex flex-row justify-between w-4/5 items-start">
                            <div className="text-sm  text-[#99999c]">
                                Payment Type
                            </div>
                            <div className="text-sm text-[#99999c]">
                                Date Created
                            </div>
                        </div>
                        <div className="flex flex-row justify-between w-full items-start">
                            <div className="font-medium text-[#343433]">
                                Tuition Link
                            </div>
                            <div className="font-medium text-[#343433]">
                                Nov 20, 2024 10:49 pm
                            </div>
                        </div>
                    </div>
                    <div className="border-dashed border-[#625BF6] bg-[#e3f7ff] flex w-full items-start p-2 justify-between items-center border rounded-lg">
                        <div className="text-smfont-medium text-[#625BF6] pl-3">
                            http://www.payshiga_test_pay_link_ANErKdru1QBjE8qP
                        </div>
                        <div className="pr-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                                <path d="M10.8 5.2V3.8C10.8 2.2536 9.5464 1 8 1H3.8C2.2536 1 1 2.2536 1 3.8V8C1 9.5464 2.2536 10.8 3.8 10.8H5.2M10.8 5.2H8C6.4536 5.2 5.2 6.4536 5.2 8V10.8M10.8 5.2H12.2C13.7464 5.2 15 6.4536 15 8V12.2C15 13.7464 13.7464 15 12.2 15H8C6.4536 15 5.2 13.7464 5.2 12.2V10.8" stroke="#625BF6" stroke-width="1.4"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className=" flex flex-col justify-center pl-[143px] gap-8 w-5/6 items-start">
            
        </div>
    </div>
     );
}
 
export default ViewPaymentWithList;