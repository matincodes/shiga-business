import Switch from "../../switch/switch";
import BigGradient from "../../../assets/big-gradient.png";
import PaymentLinkImage from "../../../assets/payment-link.png";

const ViewPayment = () => {
    return ( 
    <div className="flex flex-col gap-12 w-full items-start pt-10 pb-20">
        <div className="flex flex-col gap-6 w-5/6 items-start">
            <div className="border-solid border-b border-[#f5f5f5] flex flex-row justify-between w-full h-20 items-start">
                <div className="text-4xl font-['Platform'] font-medium text-[#343433] mt-1">
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
                    <button className="text-lg font-medium text-[#343433] border-solid border-[#e2e3e5] flex flex-row justify-center pt-3 w-1/2 h-12 cursor-pointer items-start border rounded-lg">
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
                    <div className="border-dashed border-[#ff9900] bg-[#e3f7ff] flex flex-row gap-12 w-full h-10 items-start pt-2 px-2 border rounded-lg">
                        <div className="text-sm font-['Inter'] font-medium text-[#ff9900]">
                            http://www.payshiga_test_pay_link_ANErKdru1QBjE8qP
                        </div>
                        <img
                            src="https://file.rendit.io/n/EnEv9ZxjQZJ73rbocMcW.svg"
                            alt="Rectangle"
                            className="mt-px w-3"/>
                        </div>
                </div>
            </div>
        </div>
        <div className=" flex flex-col justify-center pl-[143px] gap-8 w-5/6 h-[406px] items-start">
            <div className="flex flex-row justify-center pt-2 w-3/4 items-start">
                <img src={PaymentLinkImage} alt="" className="mt-8 mb-2"/>
            </div>
            <div className="flex flex-col ml-12 gap-2 w-1/2 items-start">
                <div className="text-center text-2xl font-semibold text-[#343433]">
                    No Payment yet
                </div>
                <div className="text-center text-[#99999c]">
                    You have not received any payment using this link yet
                </div>
            </div>
        </div>
    </div>

     );
}
 
export default ViewPayment;