const BulkReviewAndPay = () => {
    return ( 
        <div className="items-stretch flex max-w-[412px] flex-col">
        <div className="items-stretch flex justify-between gap-4">
          <div className="justify-center items-center bg-zinc-800 flex aspect-square flex-col w-16 h-16 px-6 rounded-[200px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/1255c409136baaa9bf9679e0bc8684e690ed7aaf7d94199289f6403712c3b896?apiKey=1145f93e835e4bf19859c8400c559745&"
              className="aspect-[0.7] object-contain object-center w-full stroke-[3.84px] stroke-white overflow-hidden"
            />
          </div>
          <div className="items-stretch self-center flex grow basis-[0%] flex-col my-auto pr-16">
            <div className="text-zinc-800 text-3xl font-medium whitespace-nowrap">
              - 12,500,000 NGN
            </div>
            <div className="text-neutral-400 text-sm font-medium mt-1">
              Nov 01, 2023 ・5:20pm
            </div>
          </div>
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c2b8fc204864c29fcee5a78c4554f3e480549fd7961ec89dad6332d7c1eb47cc?apiKey=1145f93e835e4bf19859c8400c559745&"
          className="aspect-[412] object-contain object-center w-full stroke-[1px] stroke-neutral-100 overflow-hidden mt-6"
        />
        <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
          <div className="text-zinc-800 text-base font-medium">
            Transaction type
          </div>
          <div className="text-zinc-800 text-right text-base font-medium">
            Bulk Transfer
          </div>
        </div>
        <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
          <div className="text-zinc-800 text-base font-medium">Sent to </div>
          <div className="text-zinc-800 text-right text-base font-medium">
            4 Recipients
          </div>
        </div>
        <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
          <div className="text-zinc-800 text-base font-medium">From</div>
          <div className="text-zinc-800 text-right text-base font-medium">
            NGN wallet
          </div>
        </div>
        <div className="justify-between items-stretch flex w-full gap-5 mt-5 px-5">
          <div className="text-zinc-800 text-base font-medium">Fee</div>
          <div className="text-zinc-800 text-right text-base font-medium">
            Free 😎{" "}
          </div>
        </div>
      </div>
     );
}
 
export default BulkReviewAndPay;