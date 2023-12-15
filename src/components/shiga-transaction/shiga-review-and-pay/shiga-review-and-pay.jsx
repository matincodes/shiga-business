const ShigaReviewAndPay = () => {
    return ( 
        <div className="w-full flex flex-col justify-center items-center">
            <header className="items-stretch flex justify-between gap-4">
                <div className="justify-center items-center bg-zinc-800 flex aspect-square flex-col w-16 h-16 px-6 rounded-[200px]">
                    <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fa8040852c5c105b01d3ce87043bd2cf5a3087b06690b6cc9239273d19087859?apiKey=1145f93e835e4bf19859c8400c559745&"
                    className="aspect-[0.7] object-contain object-center w-full stroke-[3.84px] stroke-white overflow-hidden"
                    alt="Profile Picture"
                    />
                </div>
                <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto px-5">
                    <div className="text-zinc-800 text-3xl font-medium">
                    - 120,000 NGN
                    </div>
                    <div className="text-neutral-400 text-sm font-medium mt-1">
                    Nov 01, 2023 ・5:20pm
                    </div>
                </div>
            </header>
                <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b8fc204864c29fcee5a78c4554f3e480549fd7961ec89dad6332d7c1eb47cc?apiKey=1145f93e835e4bf19859c8400c559745&"
                className="aspect-[412] object-contain object-center w-full stroke-[1px] stroke-neutral-100 overflow-hidden mt-6"
                alt="Transaction Details"
                />
            <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
                <div className="text-zinc-800 text-base font-medium flex-1">
                    Transaction type
                </div>
                <div className="text-zinc-800 text-right text-base font-medium flex-1">
                    Internal Transfer
                </div>
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
                <div className="text-zinc-800 text-base font-medium flex-1">
                    Account Name
                </div>
                <div className="text-zinc-800 text-right text-base font-medium flex-1">
                    Jomas Jummat
                </div>
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
                <div className="text-zinc-800 text-base font-medium">Account</div>
                <div className="text-zinc-800 text-right text-base font-medium">
                    Shiga
                </div>
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
                <div className="text-zinc-800 text-base font-medium">Account Name</div>
                <div className="text-zinc-800 text-right text-base font-medium">
                    JUMAT JESUTOFUNMI OBI
                </div>
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
                <div className="text-zinc-800 text-base font-medium">Fee</div>
                <div className="text-zinc-800 text-right text-base font-medium">
                    Free 😎
                </div>
            </div>
            <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
                <div className="text-zinc-800 text-base font-medium">Note</div>
                <div className="text-zinc-800 text-right text-base font-medium">
                    Sent from Shiga
                </div>
            </div>
      </div>
     );
}
 
export default ShigaReviewAndPay;