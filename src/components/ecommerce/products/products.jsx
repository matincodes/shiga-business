import TransactHead from "../../transactions/transact-head/transact-head";
import { useNavigate } from "react-router-dom";

const Products = () => {
    const navigate = useNavigate();
    const handleButton = () => {
        navigate()
    }

    return ( 
        <div className="w-full">
            <TransactHead/>
            <div className="justify-center items-center flex flex-col px-16 py-12 max-md:px-5">
                <div className="flex w-[480px] max-w-full flex-col">
                    <div className="justify-center items-center bg-white self-stretch flex flex-col pt-10 pb-2.5 px-16 max-md:max-w-full max-md:px-5">
                        <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/c21d179dc11aa30966d80f27502be5a2ee371525477d8c30b6c9008ebb3cf534?"
                        className="aspect-[1.91] object-contain object-center w-[326px] stroke-[0.966px] stroke-black overflow-hidden max-w-full"
                        alt=""
                        />
                    </div>
                    <div className="self-center text-zinc-800 text-center text-2xl font-medium max-w-[371px] mt-8">
                        No Product Listed
                    </div>
                    <div className="self-center text-neutral-400 text-center text-base font-medium whitespace-nowrap mt-2.5">
                        You have no product listed yet. Why not create one?
                    </div>
                    <div className="flex flex-col justify-center items-center">
                     <button onClick={handleButton}  className="bg-zinc-100 text-neutral-900 w-fit px-3">Add a Product</button>
                    </div>
                   
                </div>
            </div>
        </div>
     );
}
 
export default Products;