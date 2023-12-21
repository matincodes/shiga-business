import Button from "../../button/button";
import MTNProvider from "../../../assets/MTNProvider.png"

const AirtimeReview = () => {
    return ( 
        <div className="w-full items-start flex flex-col mx-10">
            <div className="justify-between items-stretch self-stretch border-b-[color:var(--Border,#F5F5F5)] flex w-full gap-5 pb-7 px-5 pt-5 border-b border-solid max-md:max-w-full max-md:flex-wrap">
                <div className="text-zinc-800 text-4xl font-medium grow whitespace-nowrap">
                    Review details and pay{" "}
                </div>
                <div className="items-stretch flex gap-3 mt-5 self-start">
                    <div className="bg-zinc-800 flex w-12 shrink-0 h-1.5 flex-col rounded-3xl" />
                    <div className="bg-zinc-800 flex w-12 shrink-0 h-1.5 flex-col rounded-3xl" />
                </div>
            </div>
            <div className="w-2/4">   
                <div className="flex gap-2 mt-12 px-5 max-md:mt-10">
                    <img src={MTNProvider} alt="" />
                    <div className="items-stretch self-center flex grow  flex-col my-auto px-5">
                        <div className="text-zinc-800 text-3xl font-medium whitespace-nowrap">
                        - 1200 NGN
                        </div>
                        <div className="text-neutral-400 text-sm font-medium whitespace-nowrap mt-1">
                        Nov 01, 2023 ・5:20pm
                        </div>
                    </div>
                </div>
                <div className="justify-between items-stretch flex max-w-full gap-5 mt-5 px-5 self-start">
                    <div className="text-zinc-800 text-base font-medium whitespace-nowrap">
                        Transaction type
                    </div>
                    <div className="text-zinc-800 text-right text-base font-medium whitespace-nowrap">
                        Bills Payment
                    </div>
                </div>
                <div className="justify-between items-stretch flex max-w-full gap-5 mt-5 px-5 self-start">
                    <div className="text-zinc-800 text-base font-medium whitespace-nowrap">
                        Sent to
                    </div>
                    <div className="text-zinc-800 text-right text-base font-medium whitespace-nowrap">
                        08101239834
                    </div>
                </div>
                <div className="justify-between items-stretch flex  max-w-full gap-5 mt-5 px-5 self-start">
                    <div className="text-zinc-800 text-base font-medium whitespace-nowrap">
                        From
                    </div>
                    <div className="text-zinc-800 text-right text-base font-medium whitespace-nowrap">
                        NGN wallet
                    </div>
                </div>
                <div className="justify-between items-stretch flex max-w-full gap-5 mt-5 px-5 self-start">
                    <div className="text-zinc-800 text-base font-medium whitespace-nowrap">
                        Fee
                    </div>
                    <div className="text-zinc-800 text-right text-base font-medium whitespace-nowrap">
                        Free 😎
                    </div>
                </div>
            </div>
            <div className="w-2/4 px-5">
                <Button/>
            </div>
      </div>
     );
}
 
export default AirtimeReview;